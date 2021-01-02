function coins(input) {
    input = Number(input)
    let changeCoins = input * 100
    let coins = 0;

    while(changeCoins >= 1) {
        switch(true) {
            case (changeCoins >= 200):
                coins++
                changeCoins -= 200
                break;
            case (changeCoins >= 100):
                coins++
                changeCoins -= 100
                break;
            case (changeCoins >= 50):
                coins++
                changeCoins -= 50
                break;
            case (changeCoins >= 20):
                coins++
                changeCoins -= 20
                break;
            case (changeCoins >= 10):
                coins++
                changeCoins -= 10
                break;
            case (changeCoins >= 5):
                coins++
                changeCoins -= 5
                break;
            case (changeCoins >= 2):
                coins++
                changeCoins -= 2
                break;
            case (changeCoins >= 1):
                coins++
                changeCoins -= 1
                break;

        }
        

    }
    console.log(coins);
}

coins(["1.23"])