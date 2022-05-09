class Person {
    personName
    age
    gender
    // constructor:excutes when you invoke the class (when you create a new object based on class)
    constructor(pName, age, gender) {
        this.personName = pName
        this.age = age
        this.gender = gender
    }
}
var person1 = new Person('Scott', 25, 'Male')
var person2 = new Person('Allen', 22, 'Female')
console.log(person1)
console.log(person2)