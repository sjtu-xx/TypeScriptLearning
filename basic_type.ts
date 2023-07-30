let a: number;
a = 12;

let b: string = "z";
// 数组
let b1: string[] = ["a", "b"];
let b2: Array<string> = ["a", "b"];
// 元组
let b3: [string, number] = ["a", 1];

// 自动确定类型
let c = true;
c = true;

let d: "male" | "female";
d = "male";

let e: boolean | string;
e = true;
e = "e";

let x: any;
x = "asdf";
x = true;
x = 123;

// any类型赋值给任何类型都不会报错
e = x;

let n: unknown;
n = 'a';
// unknown赋值给别的值会compile error
// e = n;
// 类型断言
// 方法1：类型断言
b = n as string;
b = <string>n;
// 方法2：判断类型
if (typeof n === "string") {
    b = n;
}

// 枚举
enum Gender {
    MALE = 0,
    FEMALE = 1
}

let gender: Gender = Gender.MALE;

// &表示同时
let j: { name: string } & { age: number }
j = {name: "hh", age: 123}

// 类型别名
type myType = string;
let m: myType;
m = "asdf"

type num = 1 | 2 | 3 | 4 | 5;
let k: num;
k = 1;

// void 空值(或undefined) 在 JavaScript 中，函数默认返回 undefined，这在 TypeScript 中的类型是 void
function sum(a: number, b: number): number | void {
    if (a === 1) {
        return a + b;
    }
}

// never 表示没有返回值：抛出一个异常或永远不返回
function neverReturn(): never {
    throw new Error();
}

// {} 指定对象中包含那些属性, 属性名？表示属性可选
let obj: { name: string, age?: number };
obj = {name: "xx"}

// [propName: string]: any 任意类型的属性可选
let obj2: { name: string, [propName: string]: any };
obj2 = {name: "123", s: 1}

// 声明函数
let func: (a: number, b: number) => number;
func = function (n1, n2) {
    return n1 + n2;
}


