var School=function(Schoolname,pincode)
{
    this.Schoolname=Schoolname,
    this.pincode=pincode;
}
var Student = function(name, age)
{
    
    this.Studentname = name,
    this.age=age;

}

var Student1 = new Student("Abc",25);
Student1.__proto__=new School("ABCDEF",424001);

// console.log(Student1.Schoolname);
// console.log(Student1.age);

console.log(Student1)