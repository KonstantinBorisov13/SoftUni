function traveling(input) {
    let neededBudget = Number(input[1])
    let index = 1;
    let sum = 0;
    let isFound = false
    let destination = input[0]
    while(destination !== "End") {
        for(let i = 2; i <= input.length; i++) {
            index++
            let firstSum = Number(input[index])
            sum += firstSum
            if(sum >= neededBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
                sum = 0;
                destination = input[index + 1]
                index++
                for(let i = 2; i <= input.length; i++) {
                    index++
                    let firstSum = Number(input[index])
                    sum += firstSum
                    if(sum >= neededBudget) {
                        console.log(`Going to ${destination}!`);
                        break;

            }
            
        }
        sum = 0;
        destination = input[index + 1]
        index++
        for(let i = 2; i <= input.length; i++) {
            index++
            let firstSum = Number(input[index])
            sum += firstSum
            if(sum >= neededBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }


    isFound = true
     if(isFound = true) {
         break;
     }
}

}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

