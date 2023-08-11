#include <iostream>
using namespace std;

class NumberSwapper {
private:
    int num1, num2;

public:
    NumberSwapper(int n1, int n2) {
        num1 = n1;
        num2 = n2;
    }

    friend void swapNumbers(NumberSwapper &ns);
    
    void display() {
        cout << "Number 1: " << num1 << endl;
        cout << "Number 2: " << num2 << endl;
    }
};

void swapNumbers(NumberSwapper &ns) {
    ns.num1 = ns.num1 + ns.num2;
    ns.num2 = ns.num1 - ns.num2;
    ns.num1 = ns.num1 - ns.num2;
}

int main() {
    int num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    NumberSwapper ns(num1, num2);

    cout << "Before swapping:" << endl;
    ns.display();

    swapNumbers(ns);

    cout << "After swapping:" << endl;
    ns.display();
}
