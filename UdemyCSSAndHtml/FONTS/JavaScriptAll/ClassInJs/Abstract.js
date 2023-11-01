class person{

    person_name;
    person_age;

    constructor(person_name,person_age) 
    {
        if(this.constructor==person)
        {
            throw new Error("");
        }
        else
        {
            this.person_name ="Abhishek pankaj jain";
            this.person_age  =10;
        }
    }


}
class employee extends person
{
    designartion;
    constructor(designartion)
    {
        super();
        this.designartion = "Abhishke design";
    }
    
}

var person1 = new employee();
console.log(person1.person_name)