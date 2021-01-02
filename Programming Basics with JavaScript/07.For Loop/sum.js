function sum(arg) {
    let textNumber = arg + "";
    let sum = 0

    for( let i = 0; i < textNumber.length; i++) {
        let currentnum = Number(textNumber[i])
        sum += currentnum
        
        
    }

    console.log(`The sum of the digits is:${sum}`);
    



}

sum("1234")