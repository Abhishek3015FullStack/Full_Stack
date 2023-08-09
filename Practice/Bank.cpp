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
        cout<<"name is "<<Name_of_the_depositor<<"\n";
        cout<<"balance is "<<Balance<<"\n";
    }

    


};

int main()
{
   
    Bank b1;
    
    string Name_of_the_depositor_;
    int Account_number_;
    string Type_of_Account_;
    int Balance_;
    int deposit_amount;
    int withdrwal_amount;
    int choice;
    cout<<"1.account add 2.enter a deposit amount 3.enter a withdrawal amount 4.display the balance";
    cout<<"enter your choice";
    cin>>choice;


    switch (choice)
    {
        case 1:
        cout<<"enter a name of the depositor";
        cin>>Name_of_the_depositor_;

        cout<<"enter a account number";
        cin>>Account_number_;

        cout<<"enter a type of the account ";
        cin>>Type_of_Account_;

        cout<<"enter balance";
        cin>>Balance_;

        b1.Assign(Name_of_the_depositor_,Account_number_,Type_of_Account_,Balance_);
        break;
        case 2:
        cout<<"enter a deposit amount ";
        cin>> deposit_amount;
        b1.Deposit(deposit_amount);
        break;;

        case 3:
        cout<<"enter a withdrawal amount";
        cin>>withdrwal_amount;
        b1.Withdraw(withdrwal_amount);
        break;

        case 4:
                cout<<"showing the details ";


        default:
                cout<<"enter wrong choice";
                b1.displayname_and_balance();

        

        

    }
   
   

    

    
}