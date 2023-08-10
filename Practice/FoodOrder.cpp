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
    int  order()
    {
        int a = 1;
        cout<<"1.Pizzas\n2.Burgurs\n3.sandwitch\n4.Rolls\n5.Biryani";
        cin>>a;
        return a;

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
                                cout<<price;
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
            cout<<"1.veg burger 240\n2.veg.crispy burger 160\n3.Extream veg burger 100 ";
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

            case 3:
                    cout<<"1.club sandwitch 240\n2.veg.crispy sandwitch 160\n3.Extream veg sandwitch 100";
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

            case 4:
                    cout<<"1.club Rolls 240\n2.veg.crispy Rolls 160\n3.Extream veg Rolls 100";
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

            case 5:
                    cout<<"1.club Biryani 240\n2.veg.crispy Biryani 160\n3.Extream veg Biryani 100";
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
    int a = f1.order();
    f1.SubCategory(a);
}