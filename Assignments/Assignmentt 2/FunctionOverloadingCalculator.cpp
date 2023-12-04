#include<iostream>
using namespace std;
class calculator
{
    public:
    int add(int a , int b)
    {
        return a+b;
    }
    public:
    float add(float  a , float b)
    {
        return a+b;
    }
    public:
    int subtraction(int a , int b)
    {
        return a-b;
    }
    public:
    int subtraction(float  a , float b)
    {
        return a-b;
    }
    public:
    int multiplication(float a , float b)
    {
        return a*b;
    }
    public:
    int multiplication(int a , int  b)
    {
        return a*b;
    }
    public:
    int division(int a , int  b)
    {
        return a/b;
    }
    public:
    int division(float  a , float   b)
    {
        return a/b;
    }


};
int main()
{
    calculator c1;
    cout<<c1.add(10,10);
    cout<<c1.add(10.5f,10.5f);
    cout<<c1.division(100,5);
    cout<<c1.division(100.23f,5.2f);
    cout<<c1.multiplication(152,152);
    cout<<c1.multiplication(152.2f,152.2f);
    cout<<c1.subtraction(10,10);
    cout<<c1.subtraction(10.23f,10.23f);
}