class Person
{
    person_name;
    person_age;

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