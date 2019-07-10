// Iterator遍历器是一种接口，可以完成遍历操作
var it = makeIterator(['a', 'b']);

console.log(it.next()); // { value: "b", done: false }
console.log(it.next());// { value: undefined, done: true }
console.log(it.next());// { value: "a", done: false }

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {value: undefined, done: true};
        }
    }
};

let arr = ['w','h','j'];
// 需要在自己的Symbol.iterator属性上面部署
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function Obj(value) {
    this.value = value;
    this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
    var iterator = { next: next };

    var current = this;

    function next() {
        if (current) {
            var value = current.value;
            current = current.next;
            return { done: false, value: value };
        } else {
            return { done: true };
        }
    }
    return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of one) {
    console.log(i);
}