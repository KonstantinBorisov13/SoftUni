function same(number) {
    const string = number.toString();
    let isSame = true;
    let sum = 0;

    for(let i = 0; i < string.length; i++) {
        let current = Number(string[i])
        let next = string[i + 1]
        if(string[i] !== string[i+1] && next !== undefined) {
            isSame = false;
        }

        sum = sum + Number(string[i])
    }
    console.log(`${isSame}\n${sum}`);

}

same(1234)