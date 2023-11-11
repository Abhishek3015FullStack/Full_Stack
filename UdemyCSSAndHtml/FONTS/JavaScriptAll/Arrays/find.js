// var a = 
// [
//     {Student_name:"Abhishek1",age:15,postalcode:424001},
//     {Student_name:"Abhishek2",age:125,postalcode:424001},
//     {Student_name:"Abhishek",age:125,postalcode:424001},
//     {Student_name:"Abhishek",age:125,postalcode:424001},
// ]
    
// function Abhishek(f)
// {
//     return f.age>100;
// }

// var b = a.find(Abhishek)

// console.log(b); // find the first find element  and filter apply for and give the all the records 



var c = 
[
    {Student_name:"Abhishek1",age:251, postalcode:4240011},
    {Student_name:"Abhishek2",age:252, postalcode:4240012},
    {Student_name:"Abhishek3",age:253, postalcode:4240013},
    {Student_name:"Abhishek4",age:254, postalcode:4240014},
    {Student_name:"Abhishek5",age:255, postalcode:4240015}
]
function abhishek1(v)
{
    return v.Student_name=="Abhishek1";
}
var d = c.find(abhishek1)

console.log(d)