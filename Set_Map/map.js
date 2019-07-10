//注意所有Map的键都是字符串

let map = new Map();
let obj = {};
map.set(obj,'this is content');
console.log(map.has(obj));
console.log(map.get(obj));

let map1 = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
console.log(map1.has('name'));
console.log(map1.get('name'));

let set = new Set([
    ['foo', 1],
    ['bar', 2]
]);
const m1 = new Map(set);
console.log(m1.get('foo'));

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
console.log(m3.get('baz'));
m3.set('third',3);
console.log(m3.get('third'));

//还有delete clear属性

//Map.prototype.keys()：返回键名的遍历器
// Map.prototype.values()：返回键值的遍历器
// Map.prototype.entries()：返回所有成员的遍历器
// Map.prototype.forEach()：遍历 Map 的所有成员
let formap = new Map([
    ['first','fristValue'],
    ['second','secondValue']
]);

for (let key of formap.keys()) {
    console.log(key);
}

for (let value of formap.values()) {
    console.log(value);
}

for (let item of formap.entries()) {
    console.log(item);
}

//循环的简化方法
console.log([...formap.keys()]);
console.log([...formap.values()]);
console.log([...formap.entries()]);

//使用filter等方法
let filterMap = new Map([
    ["name",1],
    ["age",2],
    ["gender",3]
]);
console.log([...filterMap].filter(([key,value]) => value > 2));
console.log(filterMap);

//将对象转化为数组最方便的方法就是[...XXX]
console.log([...filterMap]);

// 因为所有的Map都是字符串，所以将它转化为对象形式，已键值对表示
let strMap = new Map()
    .set('num',12)
    .set('name','Tom')
    .set('age',21);

console.log(toObj(strMap));

function toObj(str) {
    //因为要转化为对象，所以要先创建一个空对象
    let obj = Object.create(null);
    for (let [k,v] of str) {
       obj[k] = v
    }
    return (obj)
}

//将一个对象转换为Map形式的字符串
let objToMap = {
    "car":"雷克萨斯",
    "price":'9000000000',
    "num":'001'
};
console.log(toStr(objToMap));

function toStr(obj) {
    //将obj转化成Map形式，肯定要new Map
    let map = new Map();
    for (let k of Object.keys(obj)) {
        map.set(k,obj[k])
    }
    return map
}