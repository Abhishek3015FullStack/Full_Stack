var a = 
[
    {Student_name:"Abhishek1", age:251,postalCode:4240011},
    {Student_name:"Abhishek2", age:252,postalCode:4240012},
    {Student_name:"Abhishek3", age:253,postalCode:4240013},
    {Student_name:"Abhishek4", age:254,postalCode:4240014},
    {Student_name:"Abhishek5", age:255,postalCode:4240015},
]

function Abhishek(c)
{
    return[c,c,c];
}

var b = a.flatMap(Abhishek); // copied the one to many relation


console.log(b);