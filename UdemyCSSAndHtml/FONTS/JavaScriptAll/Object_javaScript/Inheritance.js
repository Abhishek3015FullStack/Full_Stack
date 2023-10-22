var Person={name:"abhishek",age:10 
};


var Student ={school_name:"ssvps", city :"dhule"}


Student.__proto__=Person; // inheritance syntax please check this 

// console.log(Student.name);


//=================================================

var user ={Username:"" , password:"",
login:function()
{
    if(this.Username =="Admin" && this.password=="123456")
    {
        return true ;
    }
    else
    {
        return false;
    }
}
};




var manager={department:"it"}



manager.__proto__=user;


manager.Username="Admin";
manager.password="123456";
console.log(manager.login());

