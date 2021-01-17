function numbers(n) {
    let sum = 0;
    let isSpecial = ""
    for(let i = 1; i <= n; i++) {
        let stringed = i.toString()
        for(let j = 0; j <= stringed.length - 1; j++) {
            
        sum += Number(stringed[j])
        
        if(sum === 5 || sum === 7 || sum === 11) {
            isSpecial = "True"
        } else {
            isSpecial = "False"
        }
        sum = 0;
        j++
        console.log(`${i} -> ${isSpecial}`);
    }

}
    

}

numbers(15)