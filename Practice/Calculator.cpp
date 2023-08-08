#include<iostream>
using namespace std;
class Calculator{

public :
    int  Addition(int a,int b)
    {
        return a+b;   
    }
    int  Substraction(int a,int b)
    {
        return a-b;   
    }
    int  Multiplication(int a,int b)
    {
        return a*b;   
    }
    int  modulus(int a,int b)
    {
        return a%b;   
    }
    int  division(int a,int b)
    {
        return a/b;   
    }
    
};
int main()
{
    Calculator c1 ;
    cout<<c1.Addition(6,4)<<" addition "<<"\n";
    cout<<c1.Substraction(6,4)<<" subtraction"<<"\n";
    cout<<c1.Multiplication(6,4)<<" multiplication"<<"\n";
    cout<<c1.modulus(6,4)<<" modulus"<<"\n";
    cout<<c1.division(6,4)<<" division"<<"\n";
}