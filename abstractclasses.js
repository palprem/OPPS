//objct of parent
// Abstract classes 
class Person{
    personName
    age
    constructor(personName,age){
        if(this.constructor==Person)throw new Error('Abstract class person can not be instantiated')

        this.personName=personName
        this.age=age
    }
    getDetils(){
        return `Person Name: ${this.personName}, Age: ${this.age}`
    }
}

//object of child class
class Teacher extends Person{
    mainSub
    constructor(personName,age,mainSub){
        super(personName,age)
        this.mainSub=mainSub
    }
    getDetils(){
        return `Person Name: ${super.getDetils()}, Age: ${this.age}`
    }    
}

// var person=new Person('John',30)
var teacher=new Teacher('John',20,'Chemistry')

// console.log(person.getDetils())
console.log(teacher.getDetils())
console.log(teacher)