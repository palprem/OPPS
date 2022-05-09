var person={personName:'John', age:20}//parent object
var student={rollNo:17, marks:99}//child object1
var customer={shippingAddress:'varanasi, india'}//child object2

student.__proto__=person
console.log('student.__proto__', student)