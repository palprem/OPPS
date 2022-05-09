class Person{
    #personName
    #age
    #title='Mr'

    set PersonName(value){
        // Requirement1: personName can't be null or undefined
        if(value==null || value==undefined){
            console.error('Null or undefined is not allowed for personName')
        }else{
            if(value.length>=30){
                console.error('person name length can"t be more than 30 charastics')
            }else this.#personName=value
        }
    }
    get PersonName(){
        return `${this.#title} ${this.#personName}`
    }
    //age - set and get
    set Age(value){
        if(value>= 0 && value <= 100){
            this.#age=value
        }else console.error('Age must be in b/w 0 to 100 only.')
    }
    get Age(){
        return this.#age
    }
}//end of class

var person1 = new Person()
person1.PersonName=null
console.log(person1.PersonName='John')
console.log(person1.PersonName)
console.log(person1.Age=40)
console.log(person1.Age)