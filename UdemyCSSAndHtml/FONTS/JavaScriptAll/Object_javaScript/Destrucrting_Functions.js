var Student ={name:"Abhishek" ,age :24,address:"parent address "};

let Func = function({name:en, age:sn,...other})
{
    console.log(`name and age is ${en} ${sn} ${other.address}`);
}


Func(Student);  