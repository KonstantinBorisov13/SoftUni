function theleastnumber(input) {

    let n = Number(input[0])

    let smallestNumber = Number(input[1])


    for (let i = 1; i < input.length; i++) {
        let currentNum = Number(input[i])

        if(currentNum < smallestNumber) {
            smallestNumber = currentNum
        }

    }


    console.log(smallestNumber);
    


}

theleastnumber(["2",
"100",
"99"])
