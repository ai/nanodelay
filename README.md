# Nano Delay

A tiny `Promise` wrapper around `setTimeout` for JavaScript.
Returns a `Promise` and resolve it after a specific amount of time.

* Only **45 bytes** (minified and gzipped),
  10 times smaller than [`delay`] library.
* Has good **ES modules** and **TypeScript** support.

```js
import { delay } from 'nanodelay'

async function foo () {
  await delay(300)
  // Executed after 300 milliseconds
}

delay(300).then(() => {
  // Executed after 300 milliseconds
})
```

[`delay`]: https://github.com/sindresorhus/delay

<a href="https://evilmartians.com/?utm_source=nanodelay">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>


## Usage

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

For quick hacks you can load Nano Delay from CDN. Do not use it in production because of low performance.

```js
import { delay } from 'https://cdn.jsdelivr.net/npm/nanodelay/index.js'
```


## Future

Node.js 16+ has built-in Promise-based `setTimeout`. After January 2023
you can remove `nanodelay` from your dependencies.

```js
import { setTimeout } from 'timers/promises'

await setTimeout(5000)
```
