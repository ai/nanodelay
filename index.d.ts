/**
 * Resolves a Promise after a specified amount of time.
 *
 * ```js
 * import * as delay from 'nanodelay'
 *
 * delay(300, "foo").then(result => {
 *   // Executed after 300 milliseconds
 *   result //=> "foo"
 * })
 * ```
 *
 * @param delay Milliseconds to wait before resolving.
 * @param value Argument to be resolved by this Promise.
 */
export function delay(delay: number): Promise<void>
export function delay<T>(delay: number, value: T): Promise<T>
