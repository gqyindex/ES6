// promise可以理解为一个容器，里面保存着一个异步操作
// promise对象是一个构造函数
let promise = new Promise(function (resolve, reject) {
    
    if (code === '200') {
        resolve(value)
    } else {
        reject(error)
    }
    
});

// 实例生成后，分别指定成功和失败的回调
promise.then(function (value) {
    
},function (error) {

});

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});


let promiseTimeout = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promiseTimeout.then(function() {
    console.log('resolved.');
});

console.log('Hi!');
//Promise (Promise新建后立即执行)
// Hi!
// resolved. （then指定的回调函数，在所有同步任务执行完才会执行）
