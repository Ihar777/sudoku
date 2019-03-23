module.exports = function solveSudoku(matrix) {
		var exceptions = [];
		var zero = 1;
		while(zero > 0) {
			zero = 0;
		for (var row = 0; row < 9; row++) {
			exceptions = [];
			for (var col = 0; col < 9; col++) {
				if (matrix[row][col] > 0) {
					continue;
				} else {
					zero++;
					for (var c = 0; c < 9; c++) {
						if(exceptions.includes(matrix[row][c])) {
							continue;
						} else {
						exceptions.push(matrix[row][c]);
						}
					}
					for (var r = 0; r < 9; r++) {
						if(exceptions.includes(matrix[r][col])) {
							continue;
						} else {
						exceptions.push(matrix[r][col]);
					}
				}

					for (var squareR = Math.floor(row / 3) * 3; squareR < Math.floor(row / 3) * 3 + 3; squareR++) {
						for (var squareC = Math.floor(col / 3) * 3; squareC < Math.floor(col / 3) * 3 + 3; squareC++) {
								if(!exceptions.includes(matrix[squareR][squareC])) {
						exceptions.push(matrix[squareR][squareC]);
					}
						}
					}
					if(exceptions.length === 8) {
					for (var number = 1; number <= 9; number++) {
						if(!exceptions.includes(number)) {
							matrix[row][col] = number;
							break;
						}
					}

				}	
					}
						
				}
			}

		}
			return matrix;
		}
