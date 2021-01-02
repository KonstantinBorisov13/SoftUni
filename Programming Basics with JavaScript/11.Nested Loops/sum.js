function sum(input) {
    let start = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false
    let counter = 0;

    for( let i = start; i <= endNumber; i++) {
        if(isFound) {
            break;
        }
        for(let j = start; j <= endNumber; j++) {
            counter++
            if( i + j == magicNumber) {
            console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
            isFound = true;
            break;
            }
            
        }
    }

    if(!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
        
    }



}

sum(["23",
"24",
"20"])
