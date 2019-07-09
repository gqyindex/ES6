//1、变量赋值写法
let [name,age,gender] = ['Tom','18','男'];

let [w,...h] = [1,2,3,5,7,8];
console.log(h); //[ 2, 3, 5, 7, 8 ]

let [x,y,z] = new Set([1,2,3]);

let {fn,fn1} = {fn:'Bob',fn1:'Alice'};
console.log(fn);

const {log} = console;
log('ok');

function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();

let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let { id, status, data } = jsonData;

console.log(id, status, data);