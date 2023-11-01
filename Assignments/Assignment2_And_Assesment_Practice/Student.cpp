#include<iostream>
using namespace std;
class Student 
{
    int RollNo;
    public:
    Student()
    {
        RollNo =0;


    }
    public:
    Student(int RollNo)
    {
        this->RollNo;
    }
    public:
    void SetRollNo(int RollNo)
    {
        this->RollNo = RollNo;
    }
    public:
    int GetRollno()
    {
        return RollNo;
    }
    public:
    void display()
    {
        cout<<"Roll no is "<<RollNo;
    }

};
class Test : public Student
{
    int sub1;
    int sub2;
    public:
    Test()
    {
        sub1 = 100;
        sub2 = 100;

    }
    public:
    Test(int sub1 , int sub2)
    {
        this->sub1 = sub1;
        this->sub2 = sub2;

    }
    public:
    void Setsub1(int sub1)
    {
        this-> sub1 = sub1;
    }
    public:
    int getSub1()
    {
        return sub1;
    }
   
    public:
    void SetSub2(int sub2)
    {
        this->sub2 = sub2;
    }
    public:
    int getSub2()
    {
        return sub2;
    }
    
    public:
    void display2()
    {
       
       
        cout<<"this is the sub1 marks "<<sub1;
        cout<<"this is the sub1 marks "<<sub2;

    }

};

class Marks : public  Test
{
    int marks;
    public:
    Marks()
    {
        marks = 0;
    }
    public:
    Marks(int marks)
    {
        this->marks = marks;
    }
    public:
    void SetMarks(int marks)
    {
        this->marks = marks;
    }
    public:
    int getMarks()
    {
        return marks;
    }
    public:
    void display3(int a , int b)
    {
       
         marks  = a+b;
        cout<<"total marks"<<marks;

        
        
       
    }

};
int main()
{
    Marks m1;
    m1.SetRollNo(10);
    m1.SetSub2(20);
    m1.Setsub1(20);
    int a = m1.getSub1();
    int b= m1.getSub2();
    m1.display3(a,b);

     
}
