function print(m)
{
    console.log(`this is the value is ${m}`);
}

print((function(){return 10*500})());