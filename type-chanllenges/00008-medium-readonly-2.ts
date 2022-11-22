// ============= Test Cases =============
import type { Alike, Expect } from './test-utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}


// ============= Your Code Here =============
/**
 * `K extends keyof T = keyof T`: 形参类型继承T, 默认值为T
 * `PickReadonly`: 选择只读的类型
 * `Omit`: 排除只读的类型
 * `PickReadonly & Omit`: 联合类型
 */
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [key in keyof T as key extends K ? never : key ]: T[key]
} & {
  readonly [key in K] : T[key]
}

type PickReadonly<T, K extends keyof T> = {
  readonly [key in K]: T[key]
}

type Omit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key]
}

type a = PickReadonly<Todo1, 'title'>

type b = Omit<Todo1, 'title'>

type c = MyReadonly2<Todo1, 'title'>
