var person={
    first_name:"Abhishek",
    last_name:"jain",
    age:10

};
//console.log(person.age);
let aged=function(y)
{
    this.age= this.age+y;
    console.log(this.first_name);
}
 aged.call(person,3);// only one used in the one one if you use the call then remove the parameter p and see the data in it   
//console.log(person.age);
//aged(person);
//console.log(person.age);
