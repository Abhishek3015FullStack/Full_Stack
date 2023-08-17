#include <iostream>
#include <string>

class StringConcatenation {
private:
    std::string value;

public:
    StringConcatenation(const std::string& value) : value(value) {}

    StringConcatenation& concat(const std::string& other) {
        value += other;
        return *this;
    }

    std::string getValue() const {
        return value;
    }
};

int main() {
    StringConcatenation str1("Hello, ");
    str1.concat("world!");

    StringConcatenation str2("C++ is ");
    str2.concat("awesome!");

    std::cout << str1.getValue() << std::endl;
    std::cout << str2.getValue() << std::endl;

    return 0;
}
