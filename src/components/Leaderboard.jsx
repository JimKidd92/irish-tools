import { useEffect, useState } from 'react'
import { getLeaderboard, formatTime } from '../lib/quizApi.js'

const PERIODS = [
  { id: 'daily', label: 'Today' },
  { id: 'weekly', label: 'This week' },
  { id: 'monthly', label: 'This month' },
  { id: 'all', label: 'All time' },
]

function Row({ r, isMe }) {
  return (
    <tr className={isMe ? 'lb__row lb__row--me' : 'lb__row'}>
      <td className="lb__rank">{r.rank <= 3 ? ['🥇', '🥈', '🥉'][r.rank - 1] : r.rank}</td>
      <td className="lb__name">{r.name}{isMe && <span className="lb__you"> (you)</span>}</td>
      <td className="lb__score">{r.correct}</td>
      <td className="lb__time">{formatTime(r.time_ms)}</td>
    </tr>
  )
}

export default function Leaderboard({ defaultPeriod = 'daily' }) {
  const [period, setPeriod] = useState(defaultPeriod)
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    getLeaderboard(period)
      .then((d) => {
        if (cancelled) return
        setData(d)
        setStatus('ready')
      })
      .catch(() => !cancelled && setStatus('error'))
    return () => {
      cancelled = true
    }
  }, [period])

  const meInList = data?.me && data.rows.some((r) => r.rank === data.me.rank && r.name === data.me.name)

  return (
    <div className="lb">
      <div className="lb__tabs" role="tablist">
        {PERIODS.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={period === p.id}
            className={period === p.id ? 'lb__tab lb__tab--on' : 'lb__tab'}
            onClick={() => setPeriod(p.id)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {status === 'loading' && <p className="lb__status">Loading the board…</p>}
      {status === 'error' && <p className="lb__status lb__status--error">Couldn’t load the leaderboard.</p>}

      {status === 'ready' && (
        <>
          {data.rows.length === 0 ? (
            <p className="lb__status">No scores yet — be the first on the board!</p>
          ) : (
            <table className="lb__table">
              <thead>
                <tr>
                  <th className="lb__rank">#</th>
                  <th className="lb__name">Player</th>
                  <th className="lb__score">{period === 'daily' ? 'Score' : 'Correct'}</th>
                  <th className="lb__time">Time</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((r) => (
                  <Row key={`${r.rank}-${r.name}`} r={r} isMe={data.me && data.me.name === r.name} />
                ))}
                {data.me && !meInList && (
                  <>
                    <tr className="lb__gap">
                      <td colSpan={4}>···</td>
                    </tr>
                    <Row r={data.me} isMe />
                  </>
                )}
              </tbody>
            </table>
          )}
          {period !== 'daily' && data.rows.length > 0 && (
            <p className="lb__hint">Ranked by total correct answers, then total time. Play every day to climb.</p>
          )}
        </>
      )}
    </div>
  )
}
