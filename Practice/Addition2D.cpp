#include <iostream>
#include <vector>

class Matrix2D {
private:
    std::vector<std::vector<int>> elements;

public:
    // Constructor to create a 2D matrix with given elements
    Matrix2D(const std::vector<std::vector<int>>& elements) : elements(elements) {}

    // Overload the '+' operator for matrix addition
    Matrix2D operator+(const Matrix2D& other) const {
        if (elements.size() != other.elements.size() ||
            elements[0].size() != other.elements[0].size()) {
            throw std::invalid_argument("Matrix sizes do not match for addition.");
        }

        std::vector<std::vector<int>> result_elements;
        for (size_t i = 0; i < elements.size(); ++i) {
            std::vector<int> row;
            for (size_t j = 0; j < elements[i].size(); ++j) {
                row.push_back(elements[i][j] + other.elements[i][j]);
            }
            result_elements.push_back(row);
        }

        return Matrix2D(result_elements);
    }

    // Function to display the elements of the matrix
    void display() const {
        for (const auto& row : elements) {
            for (int element : row) {
                std::cout << element << " ";
            }
            std::cout << std::endl;
        }
    }
};

int main() {
    std::vector<std::vector<int>> matrix1_elements = {{1, 2}, {3, 4}};
    std::vector<std::vector<int>> matrix2_elements = {{5, 6}, {7, 8}};

    Matrix2D matrix1(matrix1_elements);
    Matrix2D matrix2(matrix2_elements);

    std::cout << "Matrix 1:\n";
    matrix1.display();

    std::cout << "Matrix 2:\n";
    matrix2.display();

    try {
        Matrix2D result = matrix1 + matrix2;
        std::cout << "Result of addition:\n";
        result.display();
    } catch (const std::invalid_argument& e) {
        std::cerr << "Error: " << e.what() << std::endl;
    }

    return 0;
}
