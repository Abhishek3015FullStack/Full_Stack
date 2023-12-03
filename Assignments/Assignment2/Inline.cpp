#include <iostream>
using namespace std;

inline int multiply(int num) {
    return num * 2;
}

inline int cube(int num) {
    return num * num * num;
}

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;

    int result_multiply = multiply(number);
    int result_cube = cube(number);

    cout << "Multiplication value: " << result_multiply << endl;
    cout << "Cubic value: " << result_cube << endl;

   
}
