class Person{
    #person_name;
    #person_age;
    constructor()
    {
        this.#person_age=10;
        this.#person_name="Abhishek";
    }
    set setAge(age)
    {
        this.#person_age=age;
    }
    
    get getAge()
    {
        return `${this.#person_age}  ${this.#person_name}`;
    }
}
var p1 = new Person()

p1.setAge =11;
console.log(p1.getAge);