import { test } from 'uvu'
import { equal, ok } from 'uvu/assert'

import { delay } from '../index.js'

test('resolves after some time', async () => {
  let now = Date.now()
  await delay(1000)
  let diff = Date.now() - now
  ok(diff >= 1000)
  ok(diff < 1100)
})

test('resolves with specific result', async () => {
  let result = await delay(1, 'foo')
  equal(result, 'foo')
})

test.run()

