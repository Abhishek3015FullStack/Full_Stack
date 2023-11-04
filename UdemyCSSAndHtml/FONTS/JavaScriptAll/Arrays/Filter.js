var a = 
[
    {Student_name:"Abhishek1", age:251,postalcode:4240011},
    {Student_name:"Abhishek2", age:252,postalcode:4240012},
    {Student_name:"Abhishek3", age:253,postalcode:4240013},
    {Student_name:"Abhishek4", age:4,postalcode:4240014},
    {Student_name:"Abhishek5", age:5,postalcode:4240015},
    
]

function abhishek(v)
{
    return v.age>100;
}

var b = a.filter(abhishek);

console.log(b);