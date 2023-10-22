var a = {preson_name :"Abhishek", 
b:function() { 
    console.log(this);
    return "Abhishe ka birthday "   +this.preson_name;
}
};
// console.log(a.preson_name);
//  console.log(a.b());

// console.log(a);



console.log(this);
let b = a.b();
console.log(b);

