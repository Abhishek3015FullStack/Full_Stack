class Person
{
     #Person_name;
     #Person_age;

     constructor()
     {
        this.#Person_age = 10;
        this.#Person_name ="Abhishek";
     }
     seData(name ,age )
    {
        if((name!="undefined" && name!="null")&&(age<100 && age>0))
        {
            this.#Person_name=name;
            this.#Person_age =age;

        }
        else
        {
            console.log("error is occured by the user input");
        }
    }

    getDataName()
    {
        return this.#Person_name;
    }
    getDataAge()
    {
        return this.#Person_age;
    }
}

var Person1 = new Person();
var a  =Person1.getDataName();
//console.log(a);

Person1.seData("ssd",10);
var b =Person1.getDataName();
console.log(b);