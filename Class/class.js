// class写法让原型对象更加清晰，不同于传统的构造函数

// 老方法构造函数的写法
function Point(x,y) {
    this.x = x;
    this.y = y;
};

Point.prototype.toString = function () {
    return '('+ this.x + ',' + this.y + ')';
};

// 通过class语法糖
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
};

let p = new Person('Tom',28);

console.log(p);

// 可以通过__proto__添加公用属性
p.__proto__.printName = function () {
    return 'I am public'
};

class Phone {
    constructor() {
        console.log("I'm a phone.");
    }
}

class MI extends Phone {
    constructor() {
        super();
        console.log("I'm a phone designed by xiaomi");
    }
}

let mi8 = new MI();

