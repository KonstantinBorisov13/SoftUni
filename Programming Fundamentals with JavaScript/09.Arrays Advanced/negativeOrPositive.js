function negativeOrPositive(input) {
    let result = [];

    for (let num of input) {
        if(num < 0) {
            result.unshift(num)
        }
        if(num >= 0) {
            result.push(num)
        }
         
        

    }
    for (let num of result) {
        console.log(num);
        
    }

}

negativeOrPositive([3, -2, 0, -1])