var person = {
    _name:'default',
    get name(){
        console.log('this is get');
        return this._name
    },
    set name(name){
        console.log('this is set');
        this._name = name
    }
};

console.log("person name is" + person.name);
person.name = 'Wang';
console.log(person.name);

