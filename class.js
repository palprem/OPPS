class Employee{
    empId
    empName
    salary
    getEmpName(){
        return this.empName
    }
    hikeSalary(){
        return this.salary+90000
    }
}

let employee1=new Employee()
employee1.empId=101
employee1.empName='prem'
employee1.salary=3000

console.log(employee1)
console.log(employee1.getEmpName())
console.log(employee1.hikeSalary())