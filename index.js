/**
 * Resolves a Promise after a specified amount of time.
 *
 * @param {number} delay Milliseconds to wait before resolving.
 * @param {any} value Argument to be resolved by this Promise.
 *
 * @return {Promise} Promise which will be resolved after passed time.
 *
 * @example
 * const delay = require('nanodelay')
 *
 * delay(300, "foo").then(result => {
 *   // Executed after 300 milliseconds
 *   result //=> "foo"
 * })
 *
 * @name nanodelay
 */
module.exports = function (delay, value) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value)
    }, delay)
  })
}
