function numbers9(arg1, arg2) {
    let startNumber = Number(arg1)
    let endNumber = Number(arg2)
    let sum = 0
    let printResult = " "

    for( let i = startNumber; i <= endNumber; i++) {
        if( i % 9 === 0) {
            sum += i
        }
        
    } console.log(`The sum: ${sum}`);
    for( let i = startNumber; i <= endNumber; i++) {
        if( i % 9 === 0) {
            console.log(i);
            

        }



    }
    
    


}

numbers9("100", "200")