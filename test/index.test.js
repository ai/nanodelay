var delay = require('../')

it('resolves after some time', function () {
  var now = Date.now()
  return delay(1000).then(function () {
    var time = Date.now() - now
    expect(time).toBeGreaterThanOrEqual(1000)
    expect(time).toBeLessThan(1100)
  })
})

it('resolves with specific result', function () {
  return delay(1, 'foo').then(function (result) {
    expect(result).toEqual('foo')
  })
})
