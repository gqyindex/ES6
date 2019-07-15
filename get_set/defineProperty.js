// Object.defineProperty() 用于直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
// Object.defineProperty(obj, prop, desc) 参数依次为 ‘需要定义属性的当前对象’，‘需要定义的属性名’，‘属性描述符’

var person = function() {
    var _name = 'Wang';
    var obj = {};
    Object.defineProperty(obj, 'name', {
        configurable: true,
        enumerable: true,
        // get 给属性提供getter方法
        get: function() {
            console.log('this is get');
            return _name;
        },
        // set 给属性提供setter方法
        set: function(n) {
            console.log('this is set');
            _name = n;
        }
    });
    return obj;
}();
person.name = "Zhang";
console.log(person.name) // 输出 --> Zhangsan