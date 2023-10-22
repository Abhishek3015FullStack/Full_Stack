var student ={name:"Abhishek1",
age:25,
email:"abhishe1k@gmail.comn",
Physics:20,
math:20,
science:100
};


for(let prop in student)
{
    console.log(prop,student[prop]);
}

for(let prop in student)
{
    if(prop=="Physics" ||prop=="math" )
    {
        student[prop]+=5; // never use the . prop 
    }
}

console.log(student.Physics);
console.log(student.math);