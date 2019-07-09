// 1、let 声明变量只有在它所声明的作用域内有效
for (let i = 0;i < 4;i++) {
    console.log(i)
}
// console.log(i) i is not defined

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); //6 而不是10的原因：2、当前的i只在本轮的循环中有效

//2、let也不会变量预解释

//3、在相同的作用域内，不允许重复声明

//const用于定义一个不可变的常量
const R = 2.15;
console.log(R)