class Student
{
    static collegeName="ABC College";
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
     display(){
        console.log(this.name + " is studying in " + Student.collegeName);
    }
}

let amit = new Student("Amit", 20)
let raghav = new Student("Raghav", 22);
console.log(Student.collegeName);
//Student.display();
console.log(amit.name);
amit.display();
raghav.display();