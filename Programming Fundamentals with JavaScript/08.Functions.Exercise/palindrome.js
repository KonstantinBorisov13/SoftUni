function palindrome(arr) {
    let result = ""
    for (let num of arr) {
        let isPolyndrome = "true";
        num = String(num)
        let mid = parseInt(num.length / 2)
       for(let i = 0; i <= mid; i++) {
           if(num[i] !== num[num.length - i - 1]) {
               isPolyndrome = "false";
               break;
               
           }
       } 
       result += isPolyndrome + "\n"

        
    }
    return result
}

console.log(palindrome([123,323,421,121]))