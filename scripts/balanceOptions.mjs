// Returns a copy of a quiz question with its options reordered so the correct
// answer isn't always first. Pure-numeric option sets are sorted ascending (so
// they read tidily); 'all/none of the above'-style questions are left untouched;
// everything else is shuffled. Shared by the assembler and the one-off rebalancer.
const CATCHALL = /all of (these|the above|them)|none of (these|the above)|both .+ and/i
const numeric = (s) => /^-?[\d,]+$/.test(String(s).trim())
const toNum = (s) => Number(String(s).replace(/,/g, ''))

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function balanceOptions(q) {
  const correct = q.options[q.answer]
  if (q.options.some((o) => CATCHALL.test(o))) return { q: q.q, options: [...q.options], answer: q.answer }
  let opts
  if (q.options.every(numeric)) opts = [...q.options].sort((a, b) => toNum(a) - toNum(b))
  else opts = shuffle([...q.options])
  return { q: q.q, options: opts, answer: opts.indexOf(correct) }
}
