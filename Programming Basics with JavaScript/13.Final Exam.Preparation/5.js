function divide(input) {
    let index = 0;
    let n = Number(input[index])
    let p1Count = 0;
    let p1 = 0;
    let p2Count =0;
    let p2 = 0;
    let p3Count = 0;
    let p3 = 0;
    index++

    for( let i = 0; i < n; i++) {
        let number = Number(input[index])
        index++
        if(number % 2 === 0) {
            p1Count++
        }
        if(number % 3 === 0) {
            p2Count++
        }
        if( number % 4 === 0) {
            p3Count++
        }
    }
    p1 = p1Count / n * 100
    p2 = p2Count / n * 100
    p3 = p3Count / n * 100

    console.log(p1.toFixed(2)+'%');
    console.log(p2.toFixed(2)+'%');
    console.log(p3.toFixed(2)+'%');

}

divide()