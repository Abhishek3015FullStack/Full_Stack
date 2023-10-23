var Const=function(EmployeeName,salary)
{
    var Employee={};
    Employee.EmployeeName=EmployeeName,
    Employee.salary=salary,

    EmployeeGetdata= function()

    {
        return `${this.Employee.EmployeeName} and salary is ${this.salary}`;
    };
    return Employee;
};

var E1 = Const("a",1);
console.log(E1.EmployeeName);

var E2 =Const("b",2);
console.log(E2.EmployeeName);
    
