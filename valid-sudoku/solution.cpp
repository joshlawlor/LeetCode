#include <vector>
#include <unordered_set>

class Solution {
public:
    bool isValidSudoku(std::vector<std::vector<char>>& board) {
        // Check each row
        for (const auto& row : board) {
            if (!isValidUnit(row)) {
                return false;
            }
        }

        // Check each column
        for (size_t col = 0; col < board[0].size(); ++col) {
            std::vector<char> column;
            for (const auto& row : board) {
                column.push_back(row[col]);
            }
            if (!isValidUnit(column)) {
                return false;
            }
        }

        // Check each 3x3 sub-box
        for (size_t i = 0; i < 9; i += 3) {
            for (size_t j = 0; j < 9; j += 3) {
                std::vector<char> subBox;
                for (size_t x = i; x < i + 3; ++x) {
                    for (size_t y = j; y < j + 3; ++y) {
                        subBox.push_back(board[x][y]);
                    }
                }
                if (!isValidUnit(subBox)) {
                    return false;
                }
            }
        }

        return true;
    }

private:
    bool isValidUnit(const std::vector<char>& unit) {
        std::unordered_set<char> seen;
        for (char cell : unit) {
            if (cell != '.') {
                if (seen.count(cell)) {
                    return false;
                }
                seen.insert(cell);
            }
        }
        return true;
    }
};