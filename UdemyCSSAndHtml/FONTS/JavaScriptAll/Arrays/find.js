var a = 
[
    {Student_name:"Abhishek",age:125,postalcode:424001},
    {Student_name:"Abhishek",age:125,postalcode:424001},
    {Student_name:"Abhishek",age:125,postalcode:424001},
    {Student_name:"Abhishek",age:125,postalcode:424001},
]
    
function Abhishek(f)
{
    return f.age>100;
}

var b = a.find(Abhishek)

console.log(b);