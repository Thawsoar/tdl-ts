// ts 联合类型 union
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// js
// 对比学习法
// 1.返回一个对象
// 2.遍历 forEach
//    1. mapped https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// 3.todo[key] 取值 
//    1.indexed  https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// 4.看看key在不在todo里面 
//    1. keyof https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
//    2. extends constraints 类型约束https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
function MyPick(todo, keys) {
  const obj = {}
  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
    
  });
  return obj
}