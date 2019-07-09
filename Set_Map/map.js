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
