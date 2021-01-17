function diagonal(matrix) {
    let mainDiagonal = 0;
    let secDiag = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i];
        secDiag += matrix[i][matrix.length - i - 1];
    }
    console.log(mainDiagonal, secDiag);



}

diagonal([[20, 40],
 [10, 60]]
)