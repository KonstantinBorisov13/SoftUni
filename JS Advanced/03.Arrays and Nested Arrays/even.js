function even(arr) {
    let result = [];

    for(let i = 0; i < arr.length; i+=2) {
            result[result.length] = arr[i];
        
    }
    console.log(result.join(' '));
    
}

even(['20', '30', '40', '50', '60'])