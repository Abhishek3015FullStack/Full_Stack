function Ambe(a, b, c,d)
{
    let sum =0;
    for(var i = 0;i<arguments.length;i++)
    {
        console.log(arguments[i]);
        sum= sum+arguments[i];

    }
     //  console.log(arguments.length);
       console.log(sum);
    // console.log(arguments);
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(arguments[2]);
    // console.log(arguments[3]);

}

Ambe(1,2,3,4);