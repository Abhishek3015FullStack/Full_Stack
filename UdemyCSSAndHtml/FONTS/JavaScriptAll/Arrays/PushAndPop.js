var a = [

    {Student_name:"Abhishek1",Age:251,Address:"Dhule1"},
    {Student_name:"Abhishek2",Age:252,Address:"Dhule2"},
    {Student_name:"Abhishek3",Age:253,Address:"Dhule3"},
    {Student_name:"Abhishek4",Age:254,Address:"Dhule4",postalcode:"424001"}
];


for(var i =0;i<a.length;i++)
{
    console.log(`${a[i].Student_name} this is the property ${i}`); //accessing the value by using the index please check 
}

// console.log(a[0]);

a.push({Student_name:"Abhishek5",Age:255,Address:"Dhule5",postalcode:"424005"});

for(var i =0;i<a.length;i++)
{
    console.log(`${a[i].Student_name} this is the property ${i}`); //accessing the value by using the index please check 
}
console.log(a.length);

console.log(a.pop());   