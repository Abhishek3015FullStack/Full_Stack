function Showcity()
{
    console.log("New york");

    country();
}
function country()
{
    console.log("India");
}
Showcity();



let square = function(n)
{
    return n*n;
}
let cube = function(n)
{
    return square(n)*5;
}
let s= cube(5);
console.log(s);

console.log(cube(5));