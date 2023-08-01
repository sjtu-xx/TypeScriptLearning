class Person {
    // 实例属性
    readonly name: string = "xx";
    private _age: number = 10;
    // 静态属性
    static readonly country: string = "china";

    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }

    // 存取器
    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
}

console.log(Person.country);
let person = new Person("xx", 20);
console.log(person.age);
// 静态字段可以被继承
console.log(Student.country)

class C {
    constructor(public x: number, public y: number) {
    }
}

// 和上面的C等价
class C1 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
    }
}

abstract class Animal {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    abstract eat(): void;
}

class Dog extends Animal {
    eat() {
        console.log("dog eat");
    }
}

// 下面两种定义对象类型的方式等效
interface PersonInterface {
    name: string;
    age: number;
}

// 可以重复声明，等效于两个加在一起
interface PersonInterface {
    // 属性不能有实际值
    ex: string;

    // 所有方法默认是抽象方法
    sayHello(): void;
}

type personType = {
    name: string;
    age: number;
}

const person0: PersonInterface = {
    name: "xx",
    age: 20,
    ex: "xx",
    sayHello() {
        console.log("hello");
    }
}

class PersonImpl implements PersonInterface {
    name: string;
    age: number;
    ex: string;

    sayHello() {
        console.log("hello");
    }
}

const person1: personType = {
    name: "xx",
    age: 20
}

// 函数类型
let func: (person: PersonInterface) => void;
func = function (person: PersonInterface) {
    console.log(person.name);
}

// 泛型
function fn<T>(arg: T): T {
    return arg;
}

function fn2<T extends Person, U>(arg1: T, arg2: U): T {
    return arg1;
}

