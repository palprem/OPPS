class Customer{
    customerId
    customerName
    #age

    constructor(customerId, customerName,age){
        this.customerId=customerId
        this.customerName=customerName
        this.#age=age
        console.log(this.#getAge())
    }
    #getAge=function(){
        return this.#age
    }
}

var customer1=new Customer(101,'Smith',22)
// console.log(customer1.customerId, customer1.customerName, customer1.#age) direactly you can not access priv ate value
// console.log(customer1.customerId, customer1.customerName, customer1.getAge())
console.log(customer1.customerId, customer1.customerName)