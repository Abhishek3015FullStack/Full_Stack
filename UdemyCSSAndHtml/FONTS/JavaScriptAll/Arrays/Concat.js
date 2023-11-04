var a = [
            {Student_name:"Abhishek1", age:251,postalCode:4240011},
            {Student_name:"Abhishek2", age:252,postalCode:4240012},
            {Student_name:"Abhishek3", age:253,postalCode:4240013},
            {Student_name:"Abhishek4", age:254,postalCode:4240014},
            {Student_name:"Abhishek5", age:255,postalCode:4240015},
        ]

var b=  
[
        {Student_name:"Abhishek6", age:256,postalCode:4240016},
        {Student_name:"Abhishek7", age:257,postalCode:4240017},
        {Student_name:"Abhishek8", age:258,postalCode:4240018},
        {Student_name:"Abhishek9", age:259,postalCode:4240019},
        {Student_name:"Abhishek10", age:2510,postalCode:4240020},
]


var c = b.concat(a);

for(var d of c)
{
    console.log(d);
}
console.log("********************************************")
console.log(c); // access by the variblee 