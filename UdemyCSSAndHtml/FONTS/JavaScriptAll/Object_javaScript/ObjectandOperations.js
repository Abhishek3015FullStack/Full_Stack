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