class Person
{
    #person_name;
    #person_age;
    
    constructor()
    {
        this.#person_age = 10;
        this.#person_name ="Abhishek";
    }
    set name(name)
    {
        this.#person_name = name;
    }
    get name1()
    {
        return `${this.#person_name} this is the name`;
    }

}
var  p1 = new Person();
p1.name ="Abhi1235shek";

var b = p1.name1;

console.log(b);