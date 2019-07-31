let delay = require('../')

it('resolves after some time', async () => {
  let now = Date.now()
  await delay(1000)
  let diff = Date.now() - now
  expect(diff).toBeGreaterThanOrEqual(1000)
  expect(diff).toBeLessThan(1100)
})

it('resolves with specific result', async () => {
  let result = await delay(1, 'foo')
  expect(result).toEqual('foo')
})
