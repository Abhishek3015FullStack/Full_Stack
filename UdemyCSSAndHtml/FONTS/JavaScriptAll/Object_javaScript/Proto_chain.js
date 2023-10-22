var animal ={name:"" ,age:""};

var normal ={breed:"" , cloths:""};

var person ={men:"" ,man:""};

normal.__proto__=animal;
person.__proto__=normal;

person.name="adsddasd"
console.log(person.name)
