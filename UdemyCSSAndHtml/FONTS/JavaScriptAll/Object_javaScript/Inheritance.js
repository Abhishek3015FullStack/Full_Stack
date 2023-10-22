var Person={name:"abhishek",age:10}


var Student ={school_name:"ssvps", city :"dhule"}


Student.__proto__=Person; // inheritance syntax please check this 

console.log(Student.name);


//=================================================

var user ={Username:"Usename" , password:"123456"}


var manager={department:"it"}



manager.__proto__=user;


console.log(manager.Username);