#include<iostream>
using namespace std;
class person
{
    string name ;
    int age ;
    public:
    person()
    {
        name = "Abhishek";
        age = 24;
    }
    public:
    person( string name ,int age)
    {
        this->name = name;
        this->age = age;
    }
    public:
    void setName(string name)
    {
        this->name = name;

    }
    public:
    string getName()
    {
        return name;
    }
    public:
    void SetAge(int Age)
    {
        this->age= age;
    }
    public:
    int getAge()
    {
        return age;
    }
    public:
    void display()
    {
        cout<<"your name is "<<name<<"\n" ;
        cout<<"your age is "<<age <<"\n";
    }


};

class Student : public person
{
    int percentage;
    public:
    public:
    Student()
    {
        this->percentage = 100;
    }
    Student(int percentage)
    {
        this->percentage ;

    }
    public:
    void SetPercentage(int percentage)
    {
        this->percentage = percentage;
    }
    public:
    int getPercentage()
    {
        return percentage;
    }
    public:
    void Display1()
    {
        cout<<"percentage "<<percentage<<"\n";
    }

};
class Teacher : public person
{
    int salary;
    public:
    Teacher()
    {
        this->salary = 15000;
    }
    public:
     Teacher(int salary)
     {
        this->salary = salary;
     }
    public:
    void setSalary(int salary)
    {
        this->salary = salary;
    }
    public:
    int getSalary()
    {
        return salary;
    }
};

int main()
{
    Student s1(100);

    s1.setName("abhishek pankaj jain");
    s1.SetAge(10);
    s1.SetPercentage(50);
    s1.display();
    s1.Display1();

    

}