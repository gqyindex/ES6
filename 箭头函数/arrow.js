// 箭头函数 =>

/*
* 不需要function关键字创建函数
* 省略return关键字
* 继承当前上下文的this关键字
* */

var add = function (a,b) {
    return a+b;
};

console.log(add(2,4));

var sum = (a,b) => a+b;

console.log(sum(1,2));

[1,2,3].map((function(x){
    return x + 1;
}).bind(this));

[1,2,3].map(x => x+1);

var calculate = {
    array: [1,2,3],
    sum: () => {
        return this.array.reduce((result,item) => result+item)
    }
};
console.log(calculate.sum());