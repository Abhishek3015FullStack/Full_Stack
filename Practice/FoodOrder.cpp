#include<iostream>
using namespace std;
class FoodOrder{
    int choice, price,quantity,total;
        bool conts;
        int a = 0;
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
        cout<<"1.Pizzas\n2.Burgurs\n3.sandwitch\n4.Rolls\n5.Biryani ";
        cin>>a;
        return a;

    }

    public:
    void SubCategory(int c)
    {
        

       
       
       

        switch(c)
        {
            case 1:
                    cout<<"1.mexican Pizza 100\n2.Peri Pizza 120\n3.Italian Pizza 140";
                    cin>>choice;
                    switch(choice)
                    {
                        case 1: 
                                quantity = Quantity();
                                price = 100;
                                total = price*quantity;
                                cout<<total<<"\n";
                               
                               

                                break;
                        case 2:
                                quantity = Quantity();
                                price = 120;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;
                        case 3:
                                quantity = Quantity();
                                price = 140;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;
                    }
                break;

            case 2:
            cout<<"1.veg burger 240\n2.veg.crispy burger 160\n3.Extream veg burger 100 ";
                    cin>>choice;
                    switch(choice)
                    {
                        case 1:
                                quantity = Quantity();
                                price = 240;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;
                        case 2:
                                quantity = Quantity();
                                price = 160;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;
                        case 3:
                                quantity = Quantity();
                                price = 100;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;


                    }
                break;

            case 3:
                    cout<<"1.club sandwitch 240\n2.veg.crispy sandwitch 160\n3.Extream veg sandwitch 100";
                    cin>>choice;
                    switch(choice)
                    {
                        case 1:
                                quantity = Quantity();
                                price = 240;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;
                        case 2:
                                quantity = Quantity();
                                price = 160;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;
                        case 3:
                                quantity = Quantity();
                                price = 100;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;


                    }
                break;

            case 4:
                    cout<<"1.club Rolls 240\n2.veg.crispy Rolls 160\n3.Extream veg Rolls 100";
                    cin>>choice;
                    switch(choice)
                        {
                            case 1:
                                quantity = Quantity();
                                price = 240;
                                total = price*quantity;
                                cout<<total<<"\n";

                                break;
                            case 2:
                                quantity = Quantity();
                                price = 160;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;
                            case 3:
                                quantity = Quantity();
                                price = 100;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;


                    }
            break;

            case 5:
                    cout<<"1.club Biryani 240\n2.veg.crispy Biryani 160\n3.Extream veg Biryani 100";
                    cin>>choice;
                    switch(choice)
                        {
                            case 1:
                                quantity = Quantity();
                                price = 240;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;
                            case 2:
                                quantity = Quantity();
                                price = 160;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;

                            case 3:
                                quantity = Quantity();
                                price = 100;
                                total = price*quantity;
                                cout<<total<<"\n";
                                break;


                        }
            break;




        
    }

    
   

}
    public:
    int static Quantity()
    {   int quantity;
        cout<<"Please enter a quantity ";
        cin>>quantity;
        return quantity;
    }

};


int main()
{
    int c;
    FoodOrder f1;
    char i = true;
    while(i)
    {
        int a = f1.order();
        f1.SubCategory(a);
       
        cout<<"you want to the continue  or not  y and n";
        cin>>i;
        if(i=='y')
        {
            i = true;
        }
        else
        {
            i =  false;
        }

    }

}