class Person
{
    person_name;
    person_age;
<<<<<<< HEAD
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
    get Designation5()
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
        return `${this.desgination} this is child class`;
    }      
}

var emp1 =new Employee("Abhsiehk");
emp1.Age1 =10;
console.log(emp1.Designation);


    constructor()
    {
        this.person_name ="Abhishek";
        this.person_age =10;

    }
    set person_name(name)
    {
        this.person_name =name;
    }
    set person_age(age)
    {
        this.person_age = age;
    }
    get NameAndAge()
    {
        return `${this.person_name} and ${this.person_age}`;
    }
}
class Employee extends Person
{
    designation;

    constructor()
    {
        super();
        this.designation= "jr";
    }
    set Employeedesignation(design)
    {
        this.designation =design;
    }
    get designayion()
    {
        return `${this.designation} this is the desination` ;
    }
    get NameAndAge()
    {
        return `${this.person_name} and ${this.person_age} and desination is  ${this.designation} from the child class`;
    }
}


var a   = new Employee();

a.person_age =50;

console.log(a.NameAndAge);
>>>>>>> d54bb8faf2df4ebf68643cc4088d71f0c9c38a06
