let a: number;
a = 12;

let b: string = "z";

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

// void 空值(或undefined) 在 JavaScript 中，函数默认返回 undefined，这在 TypeScript 中的类型是 void
function sum(a: number, b: number): number | void {
    if (a === 1) {
        return a + b;
    }
}

// never 表示没有返回值：抛出一个异常或永远不返回
function neverReturn() : never {
    throw new Error();
}

// {} 指定对象中包含那些属性, 属性名？表示属性可选
let obj: { name: string, age?: number};
obj = {name: "xx"}

