//parent class
class Teacher{
    teacherName
    constructor(teacherName){
        this.teacherName=teacherName
    }
}

//child class
class PhysiceTeacher extends Teacher{
    mainSubject
    constructor(mainSubject){
        super('Allen')
        this.mainSubject=mainSubject
    }
}
var teacher=new Teacher()
var phyteacher=new PhysiceTeacher()
console.log(teacher.teacherName='Scott')
console.log(phyteacher.mainSubject='Math')
console.log(teacher)
console.log(phyteacher)