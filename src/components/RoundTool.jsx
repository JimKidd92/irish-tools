import { useEffect, useState } from 'react'

const STORAGE_KEY = 'irish-tools.round'

function loadPeople() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function RoundTool() {
  const [people, setPeople] = useState(loadPeople)
  const [name, setName] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(people))
    } catch {
      /* storage unavailable — grand */
    }
  }, [people])

  // Whose round: whoever's bought the fewest. Ties go to the earliest added,
  // so it naturally rotates around the table.
  const minRounds = people.length ? Math.min(...people.map((p) => p.rounds)) : 0
  const nextIndex = people.findIndex((p) => p.rounds === minRounds)

  function addPerson(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    setPeople((ps) => [...ps, { id: Date.now(), name: trimmed, rounds: 0 }])
    setName('')
  }

  function boughtRound(id) {
    setPeople((ps) => ps.map((p) => (p.id === id ? { ...p, rounds: p.rounds + 1 } : p)))
  }

  function removePerson(id) {
    setPeople((ps) => ps.filter((p) => p.id !== id))
  }

  function resetRounds() {
    setPeople((ps) => ps.map((p) => ({ ...p, rounds: 0 })))
  }

  const next = people[nextIndex]

  return (
    <section className="panel round">
      <form className="round__add" onSubmit={addPerson}>
        <input
          type="text"
          className="loc-search__input"
          placeholder="Add a name… (e.g. Sharon)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Person's name"
        />
        <button type="submit" className="btn btn--primary">
          Add
        </button>
      </form>

      {people.length === 0 ? (
        <p className="weather-hint">
          Add everyone in the session and we’ll keep track of whose round it is — no more
          slippin’ off to the jacks when it’s your turn.
        </p>
      ) : (
        <>
          {next && (
            <div className="round__next" aria-live="polite">
              <span className="round__next-label">It’s your round,</span>
              <strong className="round__next-name">{next.name}! 🍺</strong>
            </div>
          )}

          <ul className="round__list">
            {people.map((p, i) => (
              <li key={p.id} className={`round__row ${i === nextIndex ? 'is-next' : ''}`}>
                <span className="round__name">{p.name}</span>
                <span className="round__rounds">
                  {p.rounds} round{p.rounds === 1 ? '' : 's'}
                </span>
                <button className="btn btn--ghost round__buy" onClick={() => boughtRound(p.id)}>
                  + Bought
                </button>
                <button
                  className="round__remove"
                  onClick={() => removePerson(p.id)}
                  aria-label={`Remove ${p.name}`}
                  title={`Remove ${p.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button className="btn btn--ghost round__reset" onClick={resetRounds}>
            Reset rounds
          </button>
        </>
      )}
    </section>
  )
}
