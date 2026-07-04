import { COUNTIES, PROVINCES } from '../data/counties.js'

// A province-grouped county <select>. Controlled: value + onChange(name).
export default function CountySelect({ value, onChange, id = 'county-select' }) {
  return (
    <select
      id={id}
      className="quiz-auth__input county-select"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Pick your county…
      </option>
      {PROVINCES.map((p) => (
        <optgroup key={p} label={p}>
          {COUNTIES.filter((c) => c.province === p).map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  )
}
