function summeroutfit(degrees, time) {
    degrees = Number(degrees)
    let outfit = " "
    let shoes = " "

    if( degrees <= 18 ) {
        if( time === "Morning") {
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        } else if( time === "Afternoon") {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if( time === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }

    } if( degrees > 18 ) {
        if( time === "Morning") {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if( time === "Afternoon") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if( time === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    } if( degrees > 24 ) {
        if( time === "Morning") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if( time === "Afternoon") {
            outfit = "Swim Suit"
            shoes = "Barefoot"
        } else if( time === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"

        }

    
        
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)

}


summeroutfit("16",
"Morning")



