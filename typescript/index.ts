import { expectType } from 'tsd';
interface Foo {
  name: string;
  age: number;
}

interface Bar {
  name: string;
  job: string;
}

declare let foo: Foo;
declare let bar: Bar;

// foo = bar;

expectType<string>('123');

const arr1: string[] = [];

const arr2: Array<string> = [];
const arr4: [string, string, string] = ['lin', 'bu', 'du'];

console.log(arr4[599]);
