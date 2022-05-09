//static properties and methods in classes

class Studnt{
    studentName
    marks
    constructor(studentName, marks){
        this.studentName=studentName
        this.marks=marks
    }

     compareStudentMarks(stu1, stu2){
        return stu1.marks-stu2.marks
    }
}

var firstStudent=new Studnt('John', 90)
var scondStudent=new Studnt('Allen', 88)

console.log(firstStudent)
console.log(scondStudent)
console.log(Studnt.compareStudentMarks(firstStudent,scondStudent))