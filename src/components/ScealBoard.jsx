import { useCallback, useEffect, useMemo, useState } from 'react'
import { COUNTIES } from '../data/counties.js'
import { slugify, findBySlug } from '../lib/slug.js'
import { navigate } from '../hooks/useHashRoute.js'
import { useQuizAuth } from '../hooks/useQuizAuth.jsx'
import {
  quizEnabled,
  getSceal,
  getScealThread,
  createSceal,
  commentSceal,
  reportContent,
  deleteContent,
} from '../lib/quizApi.js'
import { timeAgo } from '../lib/news.js'
import QuizSignIn from './QuizSignIn.jsx'
import CountySelect from './CountySelect.jsx'

const postUrl = (countySlug, id) => `/sceal/${countySlug}/?p=${id}`

function Flair({ county }) {
  if (!county) return null
  return <span className="flair">☘ {county}</span>
}

// County Scéal — subreddit-style boards, one per county. Read without an
// account; posting/commenting uses the quiz sign-in (nickname + county flair).
export default function ScealBoard({ slug }) {
  const county = slug === 'ireland' ? 'Ireland' : findBySlug(COUNTIES, slug, 'name')?.name || null
  const { county: myCounty } = useQuizAuth()
  const [postId, setPostId] = useState(() => {
    try {
      return new URLSearchParams(window.location.search).get('p')
    } catch {
      return null
    }
  })

  // Keep the open post in the URL so scéals can be shared/deep-linked.
  useEffect(() => {
    const sync = () => {
      try {
        setPostId(new URLSearchParams(window.location.search).get('p'))
      } catch {
        /* ignore */
      }
    }
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  if (!quizEnabled()) {
    return <section className="panel"><p className="weather-hint">The Scéal boards aren’t switched on yet.</p></section>
  }

  // No board in the URL: land on the shared all-island board.
  if (!county) {
    navigate('sceal', 'ireland')
    return null
  }

  if (postId) {
    return (
      <ScealThread
        id={postId}
        onBack={() => {
          window.history.pushState({}, '', `/sceal/${slugify(county)}/`)
          setPostId(null)
        }}
      />
    )
  }

  return (
    <Board
      county={county}
      myCounty={myCounty}
      onOpenPost={(id) => {
        window.history.pushState({}, '', postUrl(slugify(county), id))
        setPostId(id)
      }}
    />
  )
}

function Board({ county, myCounty, onOpenPost }) {
  const { signedIn, needsName, needsCounty } = useQuizAuth()
  const ready = signedIn && !needsName && !needsCounty
  const [posts, setPosts] = useState(null)
  const [status, setStatus] = useState('loading')
  const [composing, setComposing] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [more, setMore] = useState(false)

  const load = useCallback(async () => {
    setStatus('loading')
    try {
      const d = await getSceal(county)
      setPosts(d.posts)
      setMore(d.posts.length === 20)
      setStatus('ready')
    } catch {
      setStatus('error')
    }
  }, [county])

  useEffect(() => {
    load()
  }, [load])

  async function loadMore() {
    if (!posts?.length) return
    try {
      const d = await getSceal(county, posts[posts.length - 1].created_at)
      setPosts((p) => [...p, ...d.posts])
      setMore(d.posts.length === 20)
    } catch {
      /* leave as-is */
    }
  }

  async function submit(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      const d = await createSceal(county, title.trim(), body.trim())
      setTitle('')
      setBody('')
      setComposing(false)
      await load()
      onOpenPost(d.id)
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="panel sceal">
      <div className="sceal__head">
        <h2 className="sceal__title">{county === 'Ireland' ? '🇮🇪 Ireland Scéal' : `☘ ${county} Scéal`}</h2>
        <CountySelect
          value={county}
          onChange={(c) => navigate('sceal', slugify(c))}
          id="sceal-county"
          allIsland
        />
      </div>
      <p className="sceal__sub">
        {county === 'Ireland'
          ? 'The all-island board — every county welcome. News, questions, memories and pure craic.'
          : `The ${county} noticeboard — news, questions, memories and pure craic.`}
        {myCounty && myCounty !== county && (
          <>
            {' '}
            <button className="linklike" onClick={() => navigate('sceal', slugify(myCounty))}>
              {county === 'Ireland' ? `Your ${myCounty} board →` : `Back to ${myCounty} →`}
            </button>
          </>
        )}
      </p>

      {ready ? (
        composing ? (
          <form className="sceal__compose" onSubmit={submit}>
            <input
              className="quiz-auth__input sceal__compose-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title — what’s the scéal?"
              maxLength={120}
              autoFocus
            />
            <textarea
              className="quiz-auth__input sceal__compose-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Tell us more (optional)…"
              maxLength={3000}
              rows={4}
            />
            <div className="sceal__compose-row">
              <button className="btn btn--primary" type="submit" disabled={busy || title.trim().length < 5}>
                {busy ? 'Posting…' : 'Post the scéal'}
              </button>
              <button type="button" className="btn btn--ghost" onClick={() => setComposing(false)}>
                Cancel
              </button>
            </div>
            {error && <p className="quiz-auth__error">{error}</p>}
          </form>
        ) : (
          <button className="btn btn--primary sceal__new" onClick={() => setComposing(true)}>
            ✍️ What’s the scéal?
          </button>
        )
      ) : (
        <div className="sceal__signin">
          <QuizSignIn />
          {!signedIn && (
            <p className="quiz-auth__small">Sign in to post — anyone can read without an account.</p>
          )}
        </div>
      )}

      {status === 'loading' && <p className="lb__status">Getting the latest scéal…</p>}
      {status === 'error' && <p className="lb__status lb__status--error">Couldn’t load the board.</p>}
      {status === 'ready' && posts.length === 0 && (
        <p className="lb__status">No scéal here yet — be the first to post!</p>
      )}

      {status === 'ready' && posts.length > 0 && (
        <ul className="sceal__list">
          {posts.map((p) => (
            <li key={p.id}>
              <button className="sceal__post" onClick={() => onOpenPost(p.id)}>
                <span className="sceal__post-title">{p.title}</span>
                {p.body && <span className="sceal__post-preview">{p.body.slice(0, 140)}</span>}
                <span className="sceal__post-meta">
                  {p.author} <Flair county={p.flair} /> · {timeAgo(p.created_at)} · 💬 {p.comments}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {more && (
        <button className="btn btn--ghost sceal__more" onClick={loadMore}>
          More scéal ↓
        </button>
      )}
    </section>
  )
}

function ScealThread({ id, onBack }) {
  const { signedIn, needsName, needsCounty } = useQuizAuth()
  const ready = signedIn && !needsName && !needsCounty
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading')
  const [reply, setReply] = useState('')
  const [replyTo, setReplyTo] = useState(null) // comment id or null (top level)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    try {
      const d = await getScealThread(id)
      setData(d)
      setStatus('ready')
    } catch {
      setStatus('error')
    }
  }, [id])

  useEffect(() => {
    load()
  }, [load])

  async function submit(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      await commentSceal(id, reply.trim(), replyTo)
      setReply('')
      setReplyTo(null)
      await load()
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  async function onReport(type, targetId) {
    try {
      await reportContent(type, targetId)
      alert('Reported — thanks, we’ll take a look.')
    } catch {
      alert('Couldn’t report — are you signed in?')
    }
  }

  async function onDelete(type, targetId) {
    if (!confirm('Delete this? There’s no undo.')) return
    try {
      await deleteContent(type, targetId)
      if (type === 'post') onBack()
      else await load()
    } catch (err) {
      alert(err.message)
    }
  }

  if (status === 'loading') return <section className="panel sceal"><p className="lb__status">Loading the scéal…</p></section>
  if (status === 'error' || !data) {
    return (
      <section className="panel sceal">
        <button className="back-link" onClick={onBack}>← Back to the board</button>
        <p className="lb__status lb__status--error">That scéal is gone, or never was.</p>
      </section>
    )
  }

  const { post, comments } = data
  const top = comments.filter((c) => !c.parent_id)
  const childrenOf = (cid) => comments.filter((c) => c.parent_id === cid)

  return (
    <section className="panel sceal">
      <button className="back-link" onClick={onBack}>← {post.county} Scéal</button>

      <article className="sceal__full">
        <h2 className="sceal__full-title">{post.title}</h2>
        <p className="sceal__post-meta">
          {post.author} <Flair county={post.flair} /> · {timeAgo(post.created_at)}
        </p>
        {post.body && <p className="sceal__full-body">{post.body}</p>}
        <p className="sceal__actions">
          {post.mine ? (
            <button className="linklike" onClick={() => onDelete('post', post.id)}>delete</button>
          ) : (
            <button className="linklike" onClick={() => onReport('post', post.id)}>⚑ report</button>
          )}
        </p>
      </article>

      <h3 className="sceal__comments-title">
        {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
      </h3>

      <ul className="sceal__comments">
        {top.map((c) => (
          <li key={c.id} className="sceal__comment">
            <CommentBody c={c} onReport={onReport} onDelete={onDelete} onReply={() => setReplyTo(c.id)} canReply={ready} />
            {childrenOf(c.id).length > 0 && (
              <ul className="sceal__replies">
                {childrenOf(c.id).map((r) => (
                  <li key={r.id} className="sceal__comment sceal__comment--reply">
                    <CommentBody c={r} onReport={onReport} onDelete={onDelete} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {ready ? (
        <form className="sceal__replybox" onSubmit={submit}>
          {replyTo && (
            <p className="sceal__replying">
              Replying to {comments.find((c) => c.id === replyTo)?.author || 'comment'} ·{' '}
              <button type="button" className="linklike" onClick={() => setReplyTo(null)}>cancel</button>
            </p>
          )}
          <textarea
            className="quiz-auth__input sceal__compose-body"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Add your tuppence worth…"
            maxLength={2000}
            rows={3}
          />
          <button className="btn btn--primary" type="submit" disabled={busy || !reply.trim()}>
            {busy ? 'Posting…' : 'Comment'}
          </button>
          {error && <p className="quiz-auth__error">{error}</p>}
        </form>
      ) : (
        <div className="sceal__signin">
          <QuizSignIn />
        </div>
      )}
    </section>
  )
}

function CommentBody({ c, onReport, onDelete, onReply, canReply }) {
  return (
    <>
      <p className="sceal__post-meta">
        {c.author} <Flair county={c.flair} /> · {timeAgo(c.created_at)}
      </p>
      <p className="sceal__comment-body">{c.body}</p>
      <p className="sceal__actions">
        {canReply && onReply && (
          <button className="linklike" onClick={onReply}>reply</button>
        )}
        {c.mine ? (
          <button className="linklike" onClick={() => onDelete('comment', c.id)}>delete</button>
        ) : (
          <button className="linklike" onClick={() => onReport('comment', c.id)}>⚑ report</button>
        )}
      </p>
    </>
  )
}
