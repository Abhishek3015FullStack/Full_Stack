var a =
[
    {Student_name:"Abhishek1", age:251,postalcode:4240011},
    {Student_name:"Abhishek2", age:252,postalcode:4240012},
    {Student_name:"Abhishek3", age:253,postalcode:4240013},
    {Student_name:"Abhishek4", age:254,postalcode:4240014},
    {Student_name:"Abhishek5", age:255,postalcode:4240015},

]

function Abhishek(c)
{
    c.age= c.age+5;
    c.Student_name = c.Student_name.toUpperCase();
    return c;

}


var b = a.map(Abhishek);
console.log(b);