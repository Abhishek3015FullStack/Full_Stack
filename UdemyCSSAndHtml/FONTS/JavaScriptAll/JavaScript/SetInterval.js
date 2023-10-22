function one(name,age)
{
    console.log("taxation"+name+age);
}
function two()
{
    console.log("not tax");
}
function three(name, age , x)
{
    console.log(`this is the name ${name},this is the age ${age}`);
    x("abhishek",52);
}
three("Abhishek",50,one);


setInterval(function () { three("S", 50,one);}, 1000 * 5);   