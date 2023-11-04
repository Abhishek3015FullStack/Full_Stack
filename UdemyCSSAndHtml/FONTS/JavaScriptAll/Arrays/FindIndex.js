var a = 
[
    {Student_name:"Abhishe1", age:2,postalcode:4240011},
    {Student_name:"Abhishek2", age:2,postalcode:4240012},
    {Student_name:"Abhishek3", age:1,postalcode:4240013},
    {Student_name:"Abhishek4", age:254,postalcode:4240014},
    {Student_name:"Abhishek5", age:255,postalcode:4240015},

]

function Abhishek(v)
{
    return v.age>100;
}

var b = a.findIndex(Abhishek); //giving the index of the element please check   

console.log(b);


a.splice(b,1,{Student:"ABC"});

for(var d of a)
{
    console.log(d);
}