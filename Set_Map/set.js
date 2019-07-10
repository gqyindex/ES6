//Set的成员都是唯一的，没有重复的值
// Set方法很像Array！！！可能是他的改进
let arr = [1,2,2,1,3,4,5];
let set = new Set(arr);
let newarr = Array.from(set);
console.log(newarr);

console.log(Array.from(new Set(arr)));

//set的属性和方法
let newset = new Set();
newset.add(2).add(3);
console.log(Array.from(newset));   //2
console.log(newset.has(2)); //true
newset.delete(3);
console.log(Array.from(newset));

//Set的遍历
let forset = new Set([1,2,3,3,3,4]);
forset.forEach((value,key) => console.log("value" + value+ "key" + key));
console.log([...forset].map(value => value*2));


//Array.from将类数组转化为真正的数组形式
let person = {
    0:'Tom',
    1:'12',
    2:'0',
    3:'12',
    'length':4
};
console.log(Array.from(person));

// 使用filter函数等进行操作
let filterSet = new Set([1,2,3,1,4,1,2,6]);
console.log(filterSet);
filterSet = new Set([...filterSet].filter(value => (value % 2) == 0));
console.log(filterSet);

//WeakSet是一个构造函数：只接受数组和类数组
let wsarr = [[1,2,3],[2,4,6]];
let ws = new WeakSet(wsarr);
console.log(ws);