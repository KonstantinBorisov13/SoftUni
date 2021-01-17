function reverse(n, arr) {
    let partialArr = [];
    for(let i = 0; i < n; i++) {
        partialArr.push(arr[i]); 
    }
    let result = ""
    for(let j = partialArr.length - 1; j >= 0; j--) {
        result += partialArr[j];
        result += " ";
    }

    console.log(result);

}

reverse(3, [10, 20, 30, 40, 50])