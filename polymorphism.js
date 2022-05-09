var person={
    personName:'john',
    age:20,
    getDetails:function(){
        return `Person Name: ${this.personName}. His age is ${this.age}`
    }
}
var teacher={
    mainSubject:'Maths',
    getDetails:function(){
        return `${this.__proto__.getDetails()}. Teachers main Subject: ${this.mainSubject}`
    }
}
teacher.__proto__=person//inheritance
console.log(teacher.getDetails())