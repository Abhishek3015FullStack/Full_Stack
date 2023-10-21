function print(m)
{
    console.log(`this is the value is ${m}`);
}

print((function(){return 10*500})());



function printmsg(value)
{
    console.log(`this is value of  the printmsg ${value}`);
}

printmsg((function(m,n,o){return m*n*o;})(10,10,20));
