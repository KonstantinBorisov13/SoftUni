function pyramid(arr) {
    let n = Number(arr[0]);
    let current = 1;
    let isBigger = false;

    for (let row = 1; row <= n; row++) {
        let line = "";

        for (let column = 1; column <= row; column++) {

            if(current > n) {
                isBigger = true
                break;
            }
            line += current + " "
            current++
            
        }
        console.log(line);
        if(isBigger) {
            break;
        }
        
    }

}

pyramid(["7"])