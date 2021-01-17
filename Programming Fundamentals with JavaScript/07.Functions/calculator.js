function calc(a, b, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let substract = (a, b) => a - b;

    switch(operator) {
        case "multiply": console.log(multiply(a, b)); break;
        case "divide": console.log(divide(a, b)); break;
        case "add": console.log(add(a, b)); break;
        case "substract": console.log(substract(a, b)); break;

    }
    
} calc(5, 6 , "multiply")