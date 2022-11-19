// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============

/**
 * `keyof T`: 索引类型查询, 它可以将对象中的所有键转换为对应字面量类型，然后再组合成联合类型
 * `K extends keyof T`: 限制键K为类型T中的存在的键K
 * `[P in K]: T[P]`: 映射类型的主要作用即是基于键名映射到键值类型,（即这里的 in 关键字）将这个联合类型的每一个成员映射出来，并将其键值类型设置为 T[P]
 * `T[P]`: 索引类型访问
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}


type title = MyPick<Todo, 'title'>
