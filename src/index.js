module.exports = function solveSudoku(matrix) {
		for (var row = 0; row < 9; row++) {
			for ( var col = 0; col < 9; col++) {
				if (matrix[row][col] > 0) {
					continue;
				} else {
					var exceptions = [];
					for (var c = 1; c <= 9; c++) {
						exceptions.push(matrix[row][c]);
					}
					for (var r = 1; r <= 9; r++) {
						if(!exceptions.includes(matrix[row][r])) {
						exceptions.push(matrix[row][r]);
					}
				}

					for (var squareR = Math.floor(row / 3) * 3; squareR < Math.floor(row / 3) * 3 + 3; squareR++) {
						for (var squareC = Math.floor(col / 3) * 3; squareC < Math.floor(col / 3) * 3 + 3; squareC++) {
								if(!exceptions.includes(matrix[squareR][squareC])) {
						exceptions.push(matrix[squareR][squareC]);
					}
						}
					}

					for (var number = 1; number <= 9; number++) {
						if(!exceptions.includes(number)) {
							
							break;
						}
					}
					matrix[row][col] = number;
						
					}
						
				}
			}
			return matrix;
		}
	
