const Person = function(name, lastname, age){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.info = function(){
        console.log('name: ' + this.name)
        console.log('lastname: ' + this.lastname)
        console.log('age: ' + this.age)
    }
}

const me = new Person('nia', 'xoferia', 14)
const barbare = new Person('barbare', 'tinikashvili', 14)

me.info()
barbare.info()