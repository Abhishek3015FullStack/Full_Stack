#include<iostream>
using namespace std;
class FoodOrder{
string name;
    public:
    void Name()
    {
       cout<<"enter your name : ";
       cin>>name;
       cout<<"hello"<<name;
    }
    public:
    void order()
    {
        cout<<"1.Pizzas\n2.Burgurs\n3.sandwitch\n4.Rolls\n5.Biryani";

    }
    public:
    void SubCategory(int c)
    {
        int choice, price;

        switch(c)
        {
            case 1:
                    cout<<"1.mexican Pizza\n2.Peri Pizza\n3.Italian Pizza";
                    cin>>choice;
                    switch(choice)
                    {
                        case 1: 
                                price = 100;
                                break;
                        case 2:
                                price = 120;
                                break;
                        case 3:
                                price = 140;
                                break;
                    }
                break;

            case 2:
            cout<<"1.club sandwitch 240\n 2.veg.crispy sandwitch 160\n3.Extream veg sandwitch 100";
                    cin>>choice;
                    switch(choice)
                    {
                        case 1:
                                price = 240;
                                break;
                        case 2:
                                price = 160;
                                break;
                        case 3:
                                price = 100;
                                break;


                    }
                    break;
        }

    }


};
int main()
{
    int c;
    FoodOrder f1;
   f1.SubCategory(1);
}