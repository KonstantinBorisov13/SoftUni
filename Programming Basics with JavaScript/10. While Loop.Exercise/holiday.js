function holiday(arr) {

    let neededMoney = Number(arr[0])
    let money = Number(arr[1])
    let command = arr[2]
    let currentMoney = Number(arr[3])
    let index = 2;
    let spendingDays = 0;
    let counter = 0
    
    while( money < neededMoney) {
        counter++
        if(command === "spend") {
            if(money < currentMoney) {
                money = 0
            } else {
            money -= currentMoney
            }
            spendingDays++
        } else {
            money += currentMoney
        }
        if( spendingDays >= 5) {
            console.log("You can't save the money.");
            console.log(`${(arr.length - 2) / 2}`);
            break;
            
        }

        index += 2
        command = arr[index]
    currentMoney = Number(arr[index + 1])

    }


    if( money >= neededMoney) {
        console.log(`You saved the money for ${counter} days.`)
        
    }

}

holiday(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
