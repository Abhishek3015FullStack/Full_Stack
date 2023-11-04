var a =
[
    {Student_name:"Abhishek1", age:251, postalcode:4240011},
    {Student_name:"Abhishek2", age:252,postalcode:424002},
    {Student_name:"Abhishek3", age:253,postalcode:424003},
    {Student_name:"Abhishek4", age:0,postalcode:424004},
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