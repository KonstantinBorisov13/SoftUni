function salary(input) {
    let tabs = Number(input[0])
    let salary = Number(input[1])

    for (let index = 2; index < input.length; index++) {
        let website = input[index]
        if(website === "Facebook") {
            salary -= 150
        } else if( website === "Instagram") {
            salary -= 100
        } else if( website === "Reddit") {
            salary -= 50
        }

        if(salary <= 0) {
            console.log("You have lost your salary.");
            break;
            
        }
    }


    if( salary > 0 ) {
        console.log(salary);
        
    }


}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])