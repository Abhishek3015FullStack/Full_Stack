#include<iostream>
using namespace std;
class Area{
    public:
    int Area1(int Area_of_Rectangle_breadth ,int height)
    {
        return Area_of_Rectangle_breadth * height;
    }
    public:
    float Area1(float Area_of_Triangle ,float breadth)
    {
        return 0.5 * Area_of_Triangle * breadth;
    }
    public:
    int Area1(int Area_of_circle)
    {
        return 3.14 * Area_of_circle * Area_of_circle;
    }
};
int main()
{
    Area a1;
    int choice;
    cout<<"1.Area of the Rectangle 2.Area of the triangle 3.Area of the Circle";
    cin>>choice;
    int breadth, height;
    float breadth1, height1;
    int circle;
    switch (choice)
    {
        case 1:
                cout<<"enter a Breadth ";
                cin>>breadth;
                cout<<"enter a height ";
                cin>>height;
                cout<<a1.Area1(breadth,height);
                break;
        case 2:
                cout<<"enter a Breadth ";
                cin>>breadth1;
                cout<<"enter a height ";
                cin>>height1;
                cout<<a1.Area1(breadth1,height1);
                break;

        case 3:
                cout<<"enter a circle values";
                cin>>circle;
                cout<<a1.Area1(circle);
                break;

        default:

                cout<<" wrong choice ";

                

    }
    
  
   
}
