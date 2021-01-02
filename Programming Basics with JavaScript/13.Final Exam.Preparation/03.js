function operator(arg1, arg2, arg3, arg4) {
    let contractTerm = arg1;
    let typeContract = arg2;
    let mobileInternet = arg3;
    let countMonth = Number(arg4);
    let totalMoney = 0;
    let tempMoney = 0;

    if( contractTerm === '1') {
        switch(typeContract) {
            case 'Small':
                tempMoney += 9.98
                if( mobileInternet === "yes") {
                    tempMoney += 5.50
                    totalMoney = countMonth * tempMoney
                } else {
                    totalMoney = countMonth * tempMoney
                }
                break;
                
            case 'Middle':
                tempMoney += 18.99
                        totalMoney = countMonth * 18.99
                        if( mobileInternet === "yes") {
                            tempMoney += 5.50
                            totalMoney = countMonth * tempMoney
                        } else {
                            totalMoney = countMonth * tempMoney
                        }
                         break;
        
            case 'Large':
                        totalMoney = countMonth * 25.98
                        if( mobileInternet === "yes") {
                            tempMoney += 5.50
                            totalMoney = countMonth * tempMoney
                        } else {
                            totalMoney = countMonth * tempMoney
                        }
                         break;
            case 'ExtraLarge':
                        totalMoney = countMonth * 35.99
                        if( mobileInternet === "yes") {
                            tempMoney += 5.50
                            totalMoney = countMonth * tempMoney
                        } else {
                            totalMoney = countMonth * tempMoney
                        }
                         break;
            }
               
    } else {
        switch(typeContract) {
            case 'Small':
            totalMoney = countMonth * 8.58
            if( mobileInternet === "yes") {
                tempMoney += 5.50
                totalMoney = countMonth * tempMoney
            } else {
                totalMoney = countMonth * tempMoney
            }
                 break;
            case 'Middle':
                totalMoney = countMonth * 17.09
                if( mobileInternet === "yes") {
                    tempMoney += 5.50
                    totalMoney = countMonth * tempMoney
                } else {
                    totalMoney = countMonth * tempMoney
                }
                 break;

            case 'Large':
                totalMoney = countMonth * 23.59
                if( mobileInternet === "yes") {
                    tempMoney += 5.50
                    totalMoney = countMonth * tempMoney
                } else {
                    totalMoney = countMonth * tempMoney
                }
                 break;
            case 'ExtraLarge':
                totalMoney = countMonth * 31.79
                if( mobileInternet === "yes") {
                    tempMoney += 5.50
                    totalMoney = countMonth * tempMoney
                } else {
                    totalMoney = countMonth * tempMoney
                }
                 break;
       }

    }
    totalMoney = totalMoney * 0.9625
    console.log(totalMoney.toFixed(2));

    

}

operator('one', 'Small', 'yes', '10')