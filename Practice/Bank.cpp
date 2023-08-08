#include<iostream>
using namespace std;
class Bank{

    string Name_of_the_depositor ;
    int Account_number;
    string Type_of_Account;
    int Balance ;
    public:
    void Assign(string Name_of_the_depositor_, int Account_number_,string Type_of_Account_,int Balance_)
    {
        Name_of_the_depositor =Name_of_the_depositor_;
        Account_number =Account_number_;
        Type_of_Account =Type_of_Account_;
        Balance =Balance_;

    }
    public:
    void Deposit(int deposit)
    {
        Balance = Balance+deposit;
       // cout<<Balance;
    }
    public:
    void Withdraw(int withdraw)
    {
        Balance = Balance-withdraw;

    }
    public:
    void displayname_and_balance()
    {
        cout<<"name is\n"<<Name_of_the_depositor<<"\n";
        cout<<"balance is\n"<<Balance<<"\n";
    }

    


};

int main()
{
    Bank b1;
    b1.Assign("Abhishek",1,"savings",5000);
    b1.Deposit(5000);
    b1.Withdraw(6000);
    b1.displayname_and_balance();
}