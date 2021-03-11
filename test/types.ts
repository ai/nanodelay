import { delay } from '../index.js'

async function test(): Promise<string> {
  await delay(500)
  let a: string = await delay(300, 'a')
  return a
}

test()
