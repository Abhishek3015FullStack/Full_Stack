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

