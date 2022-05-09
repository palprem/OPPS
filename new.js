var emp = function (empName, empId, salary) {
    this.empName = empName
    this.empId = empId
    this.salary = salary
    this.getEmpName = function () {
        return this.empName
    }
}

var emp1 = new emp('Scott', 1, 1000)
var emp2 = new emp('Allen', 2, 2000)

console.log('emp1-', emp1)
console.log('emp2-', emp2)