//Proxy可以理解成，在目标对象之前设置一层拦截
//get是拦截属性的读取操作
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});
obj.count = 1;
++obj.count;

let proxy = new Proxy({},{
    get: function (target,property) {
        return 35;
    }
});

console.log(proxy.time);
console.log(proxy.name);

let target = {};
//handler是一个空对象，没有拦截，访问nullProxy就相当于访问target
let nullProxy = new Proxy(target,{});
nullProxy.a = 'b';
console.log(target.a);



var handler = {
    get: function(target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },

    apply: function(target, thisBinding, args) {
        return args[0];
    },

    construct: function(target, args) {
        return {value: args[1]};
    }
};

var fproxy = new Proxy(function(x, y) {
    return x + y;
}, handler);

console.log(fproxy(1, 2));
new fproxy(1, 2)
fproxy.prototype === Object.prototype
fproxy.foo === "Hello, foo"

//set拦截属性的赋值操作
let validator = {
    set: function(obj, prop, value) {
        console.log("prop" + prop);
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // 对于满足条件的 age 属性以及其他属性，直接保存
        obj[prop] = value;
    }
};

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age);
person.age = 'young';
person.age = 300;