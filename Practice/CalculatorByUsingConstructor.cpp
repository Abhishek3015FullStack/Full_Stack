#include<iostream>
using namespace std;
class Abhishek{
    public:
    Abhishek(int a, int b)
    {
       cout<<"addition" <<" " << a+b<<"\n";
       cout<<"Substraction" <<" " << a-b<<"\n";
       cout<<"multiplication" <<" " << a*b<<"\n";
       cout<<"modulus" <<" " << a%b<<"\n";
       cout<<"division" <<" " << a/b<<"\n"; 
       
    }
};
int main()
{
    Abhishek a1(4,1);

    
}