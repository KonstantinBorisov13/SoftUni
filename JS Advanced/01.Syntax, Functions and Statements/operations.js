function operations(a, b, operator) {
    let result = 0;
    if(operator === '+') {
        result = a + b;
    } else if(operator === '-') {
        result = a - b;
    } else if(operator === '*') {
        result = a * b;
    } else if(operator === '/') {
        result = a / b;
    } else if(operator === '%') {
        result = a % b;
    } else if(operator === '**') {
        result = a**b
    }
    console.log(result);

}

operations(3, 2, '**')