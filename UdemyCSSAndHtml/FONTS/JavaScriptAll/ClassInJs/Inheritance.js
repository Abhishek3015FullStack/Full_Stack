class Person
{
    person_name;
    person_age;

    Desingation1;
    constructor(name,age)
    {
        this.person_age=age;
        this.person_name=name;
    }
    set name1(name)
    {
        
        this.person_name=name;
    }
    set Age1(age)
    {
        this.person_age =age;
    }
    get AgeAndName()
    {
        return `${this.person_age}, ${this.person_name}`;
    }
    set Designation2(Designation)
    {
        this.Desingation1  = Desgination;
    }
    get Designation()
    {
        return `${this.Desgination} this is from the parent `
    }

}
class Employee extends Person
{
    #desgination;
    constructor(desgination) 
    {
        super("Abhishek",10);    
        
        this.desgination =desgination;
    }
    set Designatio1n(Designation)
    {   
        this.desgination=desgination;
    }
    get Designation()
    {
        return `${this.desgination} this is child class ${super.Designation}`;
    }      
}

var emp1 =new Employee("Abhsiehk");
emp1.Age1 =10;
console.log(emp1.Designation);

