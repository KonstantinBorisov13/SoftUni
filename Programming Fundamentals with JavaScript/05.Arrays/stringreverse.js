function stringreverse(arr) {
    let lastIndex = arr.length - 1;
    for(let i = 0; i < Math.ceil(arr.length / 2); i++) {
        let temp = arr[i];
       
        arr[i] = arr[lastIndex - i];
        arr[lastIndex - i] = temp;
        

    }
    console.log(arr.join(" "));


}

stringreverse(['a', 'b', 'c', 'd', 'e'])