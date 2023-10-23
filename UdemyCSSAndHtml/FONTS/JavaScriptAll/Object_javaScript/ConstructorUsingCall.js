var School =function(Schoolname, pincode)
{
    this.School=Schoolname,
    this.pincode=pincode;
    getDetails=function()
    {
        return `this is the school name ${this.Schoolname} and pincode ${pincode}`;
    }
    
}
var Student = function(Student_name, age)
{
    School.call(this,"abhishek","424001");
    this.Student_name=Student_name,
    this.age =age;

    getDetailsOFAS=function()
    {
        return `this is the Student name ${Student_name} and age is ${age}`;

    }


    
}

Student("Abc",25);

console.log(School);
console.log(Student)

var Student1 = new  Student("Abc",42);
//console.log(Student1.getDetailsOFAS());

console.log(Student1)