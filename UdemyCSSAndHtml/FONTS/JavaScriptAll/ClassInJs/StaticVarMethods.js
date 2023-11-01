class Person
{
    person_name;
    person_age;
    static count=0;
    constructor(person_name,person_age)
    {
        this.person_name=person_name;
        this.person_age = person_age;
        Person.count++;
    }
    static print(stu)
    {
       return  `hello everyone ${stu.person_name}`
    }        
}
class Employee extends Person
{
    Designation;

    constructor()
    {
        super("Abhishek",10);
        this.Designation = "sa";
    }

}

var a  =  new Employee("Abhsihek");

var b = new Employee("Abhsihek2");

var c = new Employee("Abhsihek3");
console.log(c);

console.log(Employee.count);

console.log(Employee.print(c))
