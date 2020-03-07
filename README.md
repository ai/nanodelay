# Nano Delay

A tiny `Promise` wrapper around `setTimeout` for JavaScript.
Returns a `Promise` and resolve it after a specific amount of time.

Only **29 bytes** (minified and gzipped),
10 times smaller than [`delay`] library.

```js
const delay = require('nanodelay')

delay(300).then(() => {
  // Executed after 300 milliseconds
})
```

[`delay`]: https://www.npmjs.com/package/delay

<a href="https://evilmartians.com/?utm_source=nanodelay">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>


## Usage

Can be used with `async`/`await` syntax as well:

```js
async function foo () {
  await delay(300)
  // Executed after 300 milliseconds
}
foo()
```

The second argument will be used in `Promise` as resolved value
(useful to pass variables between scopes):

```js
createClient().then(client => {
  expect(client).toBeOK
  return delay(50, client)
}).then(client => {
  expect(client).toBeConnected()
})
```
