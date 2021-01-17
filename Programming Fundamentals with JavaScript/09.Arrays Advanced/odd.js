function odd(input) {
    let filtered = input.filter(isOddIndex)
    let doubled = filtered.map(x => x * 2)
    function isOddIndex(value, index) {
        return(index % 2) == 1

    
    }
    doubled.reverse()
    console.log(doubled.join(" "));


}

odd([10, 15, 20, 25])