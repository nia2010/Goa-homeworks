const Person = function(name, lastname, age){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}


const me = new Person('nia', 'xoferia', 14)
const you = new Person('gio', 'xoferia', 22)

console.log(me)
console.log(you)