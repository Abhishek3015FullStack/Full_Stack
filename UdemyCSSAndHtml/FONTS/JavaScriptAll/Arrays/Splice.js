var a = [
    {Student_name:"Abhishek1", age:251,postal_code:"4240011"},
    {Student_name:"Abhishek2", age:252,postal_code:"4240012"},
    {Student_name:"Abhishek3", age:253,postal_code:"4240013"},
    {Student_name:"Abhishek4", age:254,postal_code:"4240014"}

]


for(var b of a )
{
    console.log(b);
}

a.splice(2,1)// removing the second index position array;
console.log("***************************************************************");
for(var c of a )
{
    console.log(c);
}

a.splice(2,0,{Student:"Abhishek"});

console.log("***************************************************************");
for(var d of a )
{
    console.log(d);
}


console.log("***************************************************************");

a.splice(2,1,{new_again:1245455});
for(var e of a )
{
    console.log(e);
}

