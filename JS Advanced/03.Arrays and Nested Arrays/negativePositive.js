function negativePositive(arr) {
    let result = [];

    for(let number of arr) {
        if(number < 0) {
            result.unshift(number)
        } else {
            result.push(number)
        }
    }
    for(let num of result) {
        console.log(num);
    }

}

negativePositive([7, -2, 8, 9])