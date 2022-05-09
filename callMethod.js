var person = {
    age: 20
}
// let birthDay=({p:any)=> void 
let birthDay = function (years) {
    this.age += years
}
console.log('this', this)
console.log('person.age', person.age)
birthDay(person)
birthDay.call(person, 3)// the 'this' keyword of birthDay funtion will refer to 'person' object
console.log('person.age', person.age)