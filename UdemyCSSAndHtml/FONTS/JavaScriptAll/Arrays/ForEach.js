var a = 
[
    {Student_name:"Abhishek1", age:251,postalcode:4240011},
    {Student_name:"Abhishek2", age:252,postalcode:4240012},
    {Student_name:"Abhishek3", age:253,postalcode:4240012},
    {Student_name:"Abhishek4", age:254,postalcode:4240014},
    {Student_name:"Abhishek5", age:255,postalcode:4240015}

]
function Abhishek(v)
{
    var c = v.age;
    c= c+4
    console.log(c);
}

a.forEach(Abhishek);