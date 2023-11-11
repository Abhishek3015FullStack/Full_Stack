var a =
[
    {Student_name:"Abhishek1", age:251, postalcode:4240011},
    {Student_name:"Abhishek2", age:252,postalcode:424002},
    {Student_name:"Abhishek3", age:253,postalcode:424003},
    {Student_name:"Abhishek4", age:566,postalcode:424004},
]

function Abhishek(d)
{
    return d.age>100;
}
var b =a.every(Abhishek);

console.log(b);

console.log("****************************************");

var e = a.every((p)=>
{
    return p.age>100;
});


console.log(e);


var f = 
[

    {Student_name:"Abhishek1" ,age:251,postalcode:4240011},
    {Student_name:"Abhishek2" ,age:252,postalcode:4240012},
    {Student_name:"Abhishek3" ,age:253,postalcode:4240013},
    {Student_name:"Abhishek4" ,age:254,postalcode:4240014},
    {Student_name:"Abhishek5" ,age:0,postalcode:4240015}
]
function abhishek1(v)
{
    return v.age>100;
}

var g = f.every(abhishek1); //each every fields
console.log(g);