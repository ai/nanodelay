import { delay } from '../index.js'

async function test() {
  // THROWS 'string' is not assignable to parameter of type 'number'
  await delay('500')
  // THROWS Type 'string' is not assignable to type 'number'
  let a: number = await delay(300, 'a')
  return a
}

test()
