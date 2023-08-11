#include <iostream>
using namespace std;

class NumberComparator {
private:
    int num1, num2;

public:
    NumberComparator(int n1, int n2) {
        num1 = n1;
        num2 = n2;
    }

    friend int findMax(const NumberComparator &nc);
};

int findMax(const NumberComparator &nc) {
    return (nc.num1 > nc.num2) ? nc.num1 : nc.num2;
}

int main() {
    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    NumberComparator nc(num1, num2);

    int maxNumber = findMax(nc);

    cout << "Maximum number: " << maxNumber << endl;


}
