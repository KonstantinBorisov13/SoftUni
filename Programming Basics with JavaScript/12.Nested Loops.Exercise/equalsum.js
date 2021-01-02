function equalsum(input) {
    let firstNum = input[0]
    let secondNum = input[1]
    let printline = ""

    for( let i = firstNum; i <= secondNum; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for(let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if(j % 2 === 0) {
                evenSum += currentDigit
            } else {
                oddSum += currentDigit
            }

        }
        if(oddSum === evenSum) {
            printline += `${i} `
        }

    }
    console.log(printline);

}

equalsum(["100000",
"100050"])
