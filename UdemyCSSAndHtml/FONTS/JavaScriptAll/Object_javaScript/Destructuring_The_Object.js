var Student={name:"abhishek", age:25 , email:"abhishek@gmail.com", address:"sda", city:"dhule"};


var{name:fn,age:age1,email:email1,...oter} =Student;// assigiing the value in this please check  adn ... operator 

console.log(fn);
console.log(age1);
console.log(email1);
console.log(oter);


fn = "sadadada";

console.log(fn);

console.log(Student);



//practice

var customer={
    name:"abhishek",
    age:25,
    address:"dhule",
    city:"dhule",
    country:"india",
    pincode:424001
};

var {name:name1,age:age1,...other}=customer

console.log(name1);
console.log(age1);
console.log(other);



















