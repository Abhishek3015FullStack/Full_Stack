var Poly = {name:"abhishek" ,
age1:25,
getDetails:function()
{
    return `name is the ${this.name} and age is ${this.age1}`; //always use this when use of the variables in the object
}
};
//overlaoding is not possible 
var polyChild ={Tname:"Poly child" ,
age:26,
getDetails1:function()
{
    return(`name is ${this.Tname} and age is ${this.age}`);
}
};

polyChild.__proto__=Poly;

console.log(polyChild.getDetails());