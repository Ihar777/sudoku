module.exports = function solveSudoku(matrix) {

    function emptyPlace(table, zero) {

        for (let row = 0; row < 9; row++) {

            for (let col = 0; col < 9; col++) {

                if (table[row][col] === 0) {

                    zero[0] = row;
                    zero[1] = col;
                    return true;

                }

            }

        }

        return false;

    }
    ;
    function inRow(table, row, value) {

        for (let col = 0; col < 9; col++) {

            if (table[row][col] == value)
                return true;

        }

        return false;

    }
    ;
    function inCol(table, col, value) {

        for (let row = 0; row < 9; row++) {

            if (table[row][col] == value)
                return true;

        }
        return false;

    }
    ;
    function inBox(table, row, col, value) {

        for (let i = 0; i < 3; i++) {

            for (let j = 0; j < 3; j++) {

                if (table[i + row][j + col] == value)
                    return true;

            }

        }

        return false;

    }

    function isProperValue(table, row, col, value) {

        return !inRow(table, row, value) && !inCol(table, col, value) && !inBox(table, row - row % 3, col - col % 3, value);

    }

    function getResult(table) {

        let zero = [0, 0];

        if (!emptyPlace(table, zero))
            return true;

        let row = zero[0];
        let col = zero[1];

        for (let value = 1; value < 10; value++) {

            if (isProperValue(table, row, col, value)) {

                table[row][col] = value;

                if (getResult(table))
                    return true;

                else {
                    table[row][col] = 0;
                }

            }

        }

        return false;

    }

    if (getResult(matrix)) {

        return matrix;

    } else {
        return "Impossible to solve";
    }

}
