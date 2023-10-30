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
    int a , b;
    int choice;
    cout<<"1.Additon  2.Substraction 3.Multiplication 4.modulus 5.division";
    cin>>choice;
    switch (choice)
    {
        case 1:
                cout<<"enter a number ";
                cin>>a;
                cout<<"enter a number ";
                cin>>b;
                c1.Addition(a,b);
                break;
        case 2:
                cout<<"enter a number ";
                cin>>a;
                cout<<"enter a number ";
                cin>>b;
                c1.Substraction(a,b);
                break;
        case 3:
                cout<<"enter a number ";
                cin>>a;
                cout<<"enter a number ";
                cin>>b;
                c1.Multiplication(a,b);
                break;
        case 4:
                cout<<"enter a number ";
                cin>>a;
                cout<<"enter a number ";
                cin>>b;
                c1.modulus(a,b);
                break;
        case 5:
                cout<<"enter a number ";
                cin>>a;
                cout<<"enter a number ";
                cin>>b;
                c1.division(a,b);
                break;
        default:
                cout<<"wrong choice";
                


    }

    
    
    cout<<c1.Addition(6,4)<<" addition "<<"\n";
    cout<<c1.Substraction(6,4)<<" subtraction"<<"\n";
    cout<<c1.Multiplication(6,4)<<" multiplication"<<"\n";
    cout<<c1.modulus(6,4)<<" modulus"<<"\n";
    cout<<c1.division(6,4)<<" division"<<"\n";
}