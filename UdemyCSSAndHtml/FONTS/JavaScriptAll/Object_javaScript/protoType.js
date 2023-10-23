var Student =function(){
    
};

Student.prototype.marks=15;

Student.prototype.getData =function()
{
    return `is the marks ${this.marks}`
}

var Student1 = new Student();
console.log(Student1.getData());
