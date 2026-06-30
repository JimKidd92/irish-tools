// One-off + reusable: redistributes the correct-answer position across options.
// Agent-generated questions nearly always put the answer first; this shuffles
// each question's options (sorting purely-numeric options ascending for
// tidiness, leaving 'all/none of the above' style questions in place) and
// rewrites worker/quiz/questions.js. Run: node scripts/shuffle-quiz-options.mjs
import { writeFileSync } from 'node:fs'
import { QUESTIONS } from '../worker/quiz/questions.js'
import { balanceOptions } from './balanceOptions.mjs'

const out = QUESTIONS.map(balanceOptions)

const bad = out.filter((q) => q.answer < 0 || q.options[q.answer] === undefined)
if (bad.length) {
  console.error('BAD after shuffle:', bad.length)
  process.exit(1)
}
const dist = [0, 0, 0, 0]
out.forEach((q) => dist[q.answer]++)

const header =
  '// Irish Tools — Daily Quiz question bank (SERVER-SIDE, with answers).\n' +
  '// This lives in the Worker only and is never sent to the browser. The client\n' +
  '// receives questions without the answer key. Add new questions weekly and\n' +
  '// redeploy the Worker. Each: { q, options:[...], answer:<index> }.\n\n'
writeFileSync('worker/quiz/questions.js', header + 'export const QUESTIONS = ' + JSON.stringify(out, null, 2) + '\n')
console.log('rebalanced', out.length, 'questions | answer spread:', dist.join('/'))
