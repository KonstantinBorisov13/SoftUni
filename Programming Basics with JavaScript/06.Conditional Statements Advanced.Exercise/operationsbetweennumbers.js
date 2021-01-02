function operationbetweennumbers(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result = 0;
    let evenOrOdd = "odd";

      

    if( operator === "+") {
        if( result % 2 === 0) {
            evenOrOdd = "even";
        }
        console.log(`${n1} ${operator} ${n2} = ${n1 + n2} - ${evenOrOdd}`);

        
    } else if( operator === "-") {
        result = n1 - n2;
        if( result % 2 === 0) {
            evenOrOdd = "even";
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
        }
    } else if( operator === "*") {
        result = n1 * n2
        if( result % 2 === 0) {
            evenOrOdd = "even";
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
        }
    } else if( n2 === 0 && (operator === "/" || operator === "%")) {
            console.log(`Cannot divide ${n1} by zero`);
    } else if( operator === "/") {
        result = (n1 / n2);
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
        
    } else if(operator === "%") {
        result = n1 % n2;
        console.log(`${n1} ${operator} ${n2} = ${result}`);
        
    }
    
        
    }


operationbetweennumbers("10", "12", "+")
