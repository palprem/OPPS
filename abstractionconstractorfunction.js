function Person(){
    throw new Error('The Person is an abstract constructor function and can"t be instantiated.')
}
Person.prototype.personName='Smith'
Person.prototype.age=30
Person.prototype.getDetails=function(){
    return `Person name ${this.personName}, Age: ${this.age}`
}

// child constractor
function Teacher(){}
Teacher.prototype=Object.create(Person.prototype)// inheritance
Teacher.prototype.mainSubject='Medical Sciences'
Teacher.prototype.getDetails=function(){
    return `${this.__proto__.getDetails()} Main subject: ${this.mainSubject}`
    //apatoanallu invoke the parent method
}

//new object of child constructor function
var teacher1=new Teacher()
console.log(teacher1.getDetails())// invoike teacher.getDetails() method
//child method