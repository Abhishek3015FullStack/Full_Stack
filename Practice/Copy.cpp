#include <iostream>
using namespace std;

class Area {
public:
    int  Area1(int Area_of_Rectangle_breadth, int height) {
        return Area_of_Rectangle_breadth * height;
        //cout<<a;

    }

    float Area1(float Area_of_Triangle, float breadth) {
       return 0.5 * Area_of_Triangle * breadth;
        //cout<<a;
    }

    double Area1(int Area_of_circle) {
        return  3.14 * Area_of_circle * Area_of_circle;
       // cout<<a;
    }
};

int main() {
     Area a1;
    // a1.Area1(10,10);
    // a1.Area1(10.0f,10.0f);
    // a1.Area1(5);
    cout << "Area of the Rectangle: " << a1.Area1(10, 10) << "\n";
    cout << "Area of the Triangle: " << a1.Area1(10.0f, 10.0f) << "\n";
    cout << "Area of the Circle: " << a1.Area1(5) << "\n";

    return 0;
}
