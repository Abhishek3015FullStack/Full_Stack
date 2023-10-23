let a = (b,c,d) =>
{
 total =b+c+d;
 console.log(total);
}

a(10,20,30);




var sd = function()
{
   console.log(this); // access the global object check
}

sd();

var sd1 = () =>
{
    console.log(this); // empty object use this is better 
}

sd1();




//practice






var Student ={name:"Student1" ,age:25};

let Functions1 = () =>
{
    return (`name is ${Student.name} and age is ${Student.age}`)
}
console.log(Functions1());










