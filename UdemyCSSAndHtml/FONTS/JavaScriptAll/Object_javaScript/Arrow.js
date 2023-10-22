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



