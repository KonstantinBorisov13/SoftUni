function fruitshop(fruit, day, quantity) {
    quantity = Number(quantity)
    let price = 0;
    
    if( day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch(fruit) {
            case "banana":
                price = 2.50;break;
            case "apple":
                price = 1.20;break;
                case "orange":
                price = 0.85;break;
            case "grapefruit": 
                price = 1.45; break;
            case "kiwi":
                price = 2.70;break;
            case "pineapple":
                price = 5.50;break;
            case "grapes":
                price = 3.85;break;
            default: 
            console.log("error");break;
        } 

    } else if(day === "Saturday"|| day === "Sunday") {
        switch(fruit) {
            case "banana":
                price = 2.70;break;
            case "apple":
                price = 1.25;break;
            case "orange":
                price = 0.90;break;
            case "grapefruit": 
                price = 1.60; break;
            case "kiwi":
                price = 3;break;
            case "pineapple":
                price = 5.60;break;
            case "grapes":
                price = 4.20;break;
        }


    } else if(day === "Nineday"|| day === "Workday") {
        console.log("error")
    }
    
    
    let totalprice = price * quantity

    if(totalprice > 0) {

    console.log(totalprice.toFixed(2));
    }
    


}

fruitshop("water",
"Nineday",
"1.5")








