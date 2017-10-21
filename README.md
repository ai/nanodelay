# Nano Delay

A tiny `Promise` wrapper around `setTimeout` for JavaScript.
Returns a `Promise`, which will be resolved after a specific amount of time.

Only 31 bytes (minified and gzipped). No dependencies.
It is 9 times smaller than [`delay`] library.

```js
const delay = require('nanodelay')

delat(300).then(() => {
  // Executed after 300 milliseconds
})
```

Can be used with `async`/`await` syntax as well:

```js
async function foo () {
  await delay(300)
  // Executed after 300 milliseconds
}
foo()
```

Second argument will be used in `Promise` as resolved value
(useful to pass variables between scopes):

```js
createClient().then(client => {
  expect(client).toBeOK
  return delay(50, client)
}).then(client => {
  expect(client).toBeConnected()
})
```

[`delay`]: https://www.npmjs.com/package/delay
