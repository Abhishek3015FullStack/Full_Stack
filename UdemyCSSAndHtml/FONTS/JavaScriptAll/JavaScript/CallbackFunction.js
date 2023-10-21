function one()
{
    console.log("taxation")
}
function two()
{
    console.log("not tax");
}
function three(name, age , x)
{
    console.log(`this is the name ${name},this is the age ${age}`);
    x();
}
three("Abhishek",50,one);   
