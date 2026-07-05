import { useEffect, useState } from 'react'
import { getCountyStandings } from '../lib/quizApi.js'

const PERIODS = [
  { id: 'daily', label: 'Today' },
  { id: 'weekly', label: 'This week' },
  { id: 'monthly', label: 'This month' },
  { id: 'all', label: 'All time' },
]

// County-vs-county quiz standings: combined correct answers per county.
export default function CountyStandings({ myCounty = null }) {
  const [period, setPeriod] = useState('weekly')
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false
    setStatus('loading')
    getCountyStandings(period)
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

      {status === 'loading' && <p className="lb__status">Totting up the counties…</p>}
      {status === 'error' && <p className="lb__status lb__status--error">Couldn’t load the standings.</p>}

      {status === 'ready' &&
        (data.rows.length === 0 ? (
          <p className="lb__status">No county scores yet - pick your county and get playing!</p>
        ) : (
          <>
            <table className="lb__table">
              <thead>
                <tr>
                  <th className="lb__rank">#</th>
                  <th className="lb__name">County</th>
                  <th className="lb__score">Players</th>
                  <th className="lb__score">Correct</th>
                  <th className="lb__time">Avg /10</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((r) => (
                  <tr key={r.county} className={r.county === myCounty ? 'lb__row lb__row--me' : 'lb__row'}>
                    <td className="lb__rank">{r.rank <= 3 ? ['🥇', '🥈', '🥉'][r.rank - 1] : r.rank}</td>
                    <td className="lb__name">
                      {r.county}
                      {r.county === myCounty && <span className="lb__you"> (yours)</span>}
                    </td>
                    <td className="lb__score">{r.players}</td>
                    <td className="lb__score">{r.correct}</td>
                    <td className="lb__time">{r.avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="lb__hint">Every player’s correct answers count for their county. Rally the parish!</p>
          </>
        ))}
    </div>
  )
}
