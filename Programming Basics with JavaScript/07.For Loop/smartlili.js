function smartlili(arg1, arg2, arg3) {
    let age = Number(arg1);
    let pricewashingmachine = Number(arg2);
    let pricetoy = Number(arg3);
    let summoney = 0;
    let toy = 0;
    let money = 10;

    for(let i = 1; i <= age; i++) {
        if( i % 2 === 0) {
            summoney += money - 1;
            money += 10;
        } else {
            toy++

        }
    }
    summoney += toy * pricetoy
    let diff = summoney - pricewashingmachine


    if( summoney - pricewashingmachine >= 0) {
        
    console.log(`Yes! ${Math.abs(diff).toFixed(2)}`);

    } else {
        diff = Math.abs(diff)
        console.log(`No! ${diff.toFixed(2)}`);
        
    }
    
    


}

smartlili("10", "170.00", "6")