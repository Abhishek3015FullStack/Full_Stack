#include <iostream>
#include <cstring>
using namespace std;

class StringConcatenator {
private:
    char* str;

public:
    StringConcatenator(const char* s = "") {
        str = new char[strlen(s) + 1];
        strcpy(str, s);
    }

    // Operator overloading for concatenation
    StringConcatenator operator+(const StringConcatenator& other) {
        char* newStr = new char[strlen(str) + strlen(other.str) + 1];
        strcpy(newStr, str);
        strcat(newStr, other.str);
        return StringConcatenator(newStr);
    }

    void display() {
        cout << str << endl;
    }

    ~StringConcatenator() {
        delete[] str;
    }
};

int main() {
    StringConcatenator s1("Hello, ");
    StringConcatenator s2("world!");

    StringConcatenator result = s1 + s2;

    cout << "Concatenated string: ";
    result.display();

    
}
