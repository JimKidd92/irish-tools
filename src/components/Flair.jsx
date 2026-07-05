import { COUNTY_COLOURS } from '../data/countyColours.js'

// A county flair badge: a small swatch in that county's traditional colours
// plus the name. Shared by the leaderboard and Scéal boards.
export default function Flair({ county }) {
  if (!county) return null
  const [c1, c2] = COUNTY_COLOURS[county] || ['#169b62', '#0f7a4d']
  return (
    <span className="flair" style={{ '--flair-c1': c1, '--flair-c2': c2 }}>
      <span className="flair__swatch" aria-hidden="true" />
      {county}
    </span>
  )
}
