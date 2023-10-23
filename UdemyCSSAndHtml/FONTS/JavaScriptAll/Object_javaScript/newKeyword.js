var Constuctore1 =function(EmployeeName,Salary)
{
    this.EmployeeName = EmployeeName,
    this.Salary=Salary;

    getDetails=function()
    {
        return `Employee name ${this.EmployeeName} and salary is ${this.Salary}`;
    };
};

var Employee1 = new Constuctore1("abhsihek",150000);

console.log(Employee1);