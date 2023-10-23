var Student1={name:"Abhishek pankaj jain1",
age:25
};

var Student2={
name:"Abhishek pankaj jain2",
age:36
}

let calculate=function(s1,s2,s3)
{
    var total= s1+s2+s3;
    console.log(`this is the total marks of the student ${total} , this is the name of the student is ${this.name}`);

}

let a = calculate.bind(Student1);

a(10,20,30);


let b = calculate.bind(Student2);


b(25,253.63,580.63);



var Student3={name:"abhishek Student1" ,age:25, address:"parent address1", city:"dhule1"};

var Student4={name:"abhishek Student2" ,age:26, address:"parent address2", city:"dhule2"};

var Function1 = function()
{
    return `my name is ${this.name} ,and age is ${this.age},and parent address ${this.address} `;
}

var d = Function1.bind(Student4);

var e = d();

console.log(e);

















