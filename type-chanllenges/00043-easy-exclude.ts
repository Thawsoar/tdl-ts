// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============

/**
 * 在泛型中，我们可以使用 extends 关键字来约束传入的泛型参数必须符合要求。
 * 关于 extends，A extends B 意味着 A 是 B 的子类型，
 */
type MyExclude<T, U> = T extends U ? never : T

