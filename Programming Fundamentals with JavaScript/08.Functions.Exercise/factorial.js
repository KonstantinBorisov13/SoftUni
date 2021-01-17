function divideFactorial(n1, n2) {
    console.log((factorial(n1) / factorial(n2)).toFixed(2));



    function factorial(x) {
        if (x === 0) {
            return 1;
        }
        return x * factorial(x - 1)
    }

}
divideFactorial(5, 2)

