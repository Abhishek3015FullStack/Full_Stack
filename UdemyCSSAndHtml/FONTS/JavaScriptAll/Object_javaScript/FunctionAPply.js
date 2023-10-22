var Stdent1={name:"Abhishek1",
age:25
};

var Student2={name:"Abhishek2",
age:26
};

let TotalFunction=function(Subject1,Subject2,Subject3) // here we are not receiving the object the call and apply method is directly send the data please check     
{
   var  toatlmarks=Subject1+Subject2+Subject3;
   console.log(`this is the total marks ${toatlmarks}, this is the studnet name ${this.name}`);
}

TotalFunction.apply(Student2,[10,20,30]);//array as arguement

TotalFunction.call(Stdent1,10,50,30);