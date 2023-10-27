class Employee
{
     #Firstname;
     #LastName;
     #Designation;
     #Salary;

     constructor()
     {
        
        this.#Designation ="default";
        this.#Firstname ="default";
        this.#LastName ="default";
        this.#Salary =258;

     }
     GetData()
     {
        console.log(this.#Firstname,this.#LastName,this.#Designation,this.#Salary);
     }
     SetData(Firstname,LastName,Designation,Salary)
     {
        this.#Firstname =Firstname;
        this.#LastName = LastName;
        this.#Designation =Designation;
        this.#Salary =Salary;
     }

}

var e = new Employee();

// e.Designation= "D";
// e.Firstname="f";
// e.LastName="L";
// e.Salary=258;


console.log(e);
//e.GetData();

e.SetData("d","s","a",25);

e.GetData();

console.log(e);

var e2 = new Employee();
console.log(e2);