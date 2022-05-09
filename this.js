var person={
    personname:'prem',
    birthday:function(){
        console.log('this', this)
        return `Happy Birthday ${this.personname}`
    }
}
this.price=100
console.log('person', this)