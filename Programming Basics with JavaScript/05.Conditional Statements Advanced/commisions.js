function comissions(town, volume) {
    volume = Number(volume)
    commision = 0

    if( town === "Sofia" ) {
        if( volume <= 500) {
            commision = 0.05
        } else if( volume <= 1000) {
            commision = 0.07
        } else if (volume <= 10000) {
            commision = 0.08
        } else if (volume >= 10000.01) {
            commision = 0.12
        } else {
            console.log("error");
            
        }
    } else if( town === "Varna") {
        if( volume <= 500) {
            commision = 0.045
        } else if( volume <= 1000) {
            commision = 0.075
        } else if (volume <= 10000) {
            commision = 0.1
        } else if (volume >= 10000.01) {
            commision = 0.13
        } else {
            console.log("error");
            
        }

    } else if( town === "Plovdiv") {
        if(volume <= 500) {
            commision = 0.055
        } else if( volume <= 1000) {
            commision = 0.08
        } else if (volume <= 10000) {
            commision = 0.12
        } else if (volume >= 10000.01) {
            commision = 0.145
        } else if (volume < 0) {
            console.log("error");
            
        }

    } else if(town === "Kaspichan") {
        console.log();
        
    } else {
        console.log("error")
    }

    result = volume * commision
    if( result > 0) {
console.log(result.toFixed(2));
    } else if( volume < 0) {
        console.log("error")
    }
    

}

comissions("Plovdiv", "-20")



