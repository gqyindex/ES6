// 按顺序执行，遇到异步往下走，但是Promise对象被创建的时候，就会执行程序，然后等到全局的都执行完了，执行.then，再执行定时器

setTimeout(function() {
    console.log(1)
}, 0);
new Promise(function(a, b) {
    console.log(2);
    for(var i = 0; i < 10; i++) {
        i == 9 && a();
    }
    console.log(3);
}).then(function() {
    console.log(4)
});
console.log(5);
// 2，3，5，4，1

console.log(1);

setTimeout(function(){
    console.log(2);
    let promise = new Promise(function(resolve, reject) {
        console.log(7);
        resolve()
    }).then(function(){
        console.log(8)
    });
},1000);

setTimeout(function(){
    console.log(10);
    let promise = new Promise(function(resolve, reject) {
        console.log(11);
        resolve()
    }).then(function(){
        console.log(12)
    });
},0);

let promise = new Promise(function(resolve, reject) {
    console.log(3);
    resolve()
}).then(function(){
    console.log(4)
}).then(function(){
    console.log(9)
});

console.log(5);

//1,3,5,4,9,10,11,12,2,7,8

var p = new Promise(resolve => {
    console.log(1);
    resolve(2);
    console.log(3)
}).then((data) => {
    console.log(4);
    console.log(data);
});

setTimeout(function () {
    console.log(6)
}, 10);
setTimeout(function () {
    console.log(7)
}, 0);

console.log(9);

setTimeout(function () {
    console.log(10)
}, 10);

setTimeout(function () {
    console.log(11)
}, 100);

console.log(p);

// 1,3,9,4,2,7,6,10,11