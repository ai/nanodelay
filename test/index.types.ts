import { delay } from '../'

async function test () {
  await delay(500)
  let a: string = await delay(300, 'a')
  return a
}

test()
