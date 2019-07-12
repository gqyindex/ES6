//module在导入模块时,一次课导入多个变量，就不用一个一个定义了
let {stat,exists,readFile} = require('fs');

//export用于规定模块的对外接口，输出变量,函数类等
export var name = 'Name';

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };

export function multiply(x,y) {
    return x*y
}

//使用export倒出，import用于输入模块提供的功能，用来导入
import {stat,exists,readFile} from 'fs';

// export default指定默认输出
export default function () {
    console.log('this is export default')
}

function foo() {
    console.log('this is foo')
}

export default foo()

