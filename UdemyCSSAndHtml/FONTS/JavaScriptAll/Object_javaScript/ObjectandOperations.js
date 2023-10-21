var Employee={ 
     first_name: "Abhishek",
     last_name :"jain",
     designation :"Permanent",
     salary:15000,
     Fullname: function() {
        return this.first_name+this.last_name
    },
    getPromotion:function(){
        var isElgible;
     if(this.salary>150)
     {
        isElgible= true;
     }
     else
     {
        isElgible= false;
     }
     return isElgible;
    }
     
    
};
console.log(Employee.first_name);
console.log(Employee.Fullname());
var elibible = Employee.getPromotion();
if(elibible==true)
{
    console.log("congratualtions");
}
else
{
    console.log("kasu nathi");
}


Employee.first_name="Abhishekedit";
Employee.parenaddress="Dhule";
console.log(Employee.parenaddress)

console.log(Employee.first_name);

console.log(Employee);


Employee.GetAddress = function(){
    return this.parenaddress
}

console.log(Employee.GetAddress());