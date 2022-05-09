
var Student=function(){

}

// adding properties to 'prototype' properties of constructor function
Student.prototype.maths=70
Student.prototype.physics=70
Student.prototype.chemistry=70

console.log('Student.prototype', Student.prototype)

//adding method to 'prototype' property of cunctructor function
Student.prototype.getTotalMarks=function(){
    return this.maths + this.physics+this.chemistry
}

var s= new Student()
console.log('s', s)
console.log('s.__proto__', s.__proto__)
console.log('s.maths', s.maths)
console.log('s.physics', s.physics)
console.log('s.chemistry', s.chemistry)
console.log('s.getTotalMarks', s.getTotalMarks())