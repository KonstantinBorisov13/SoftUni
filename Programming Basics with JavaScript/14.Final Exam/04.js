function balls(input) {
    let index = 0;
    let numberBalls = Number(input[index]);
    index++
    let color = input[index]
    let totalPoints = 0;
    let redPoints = 0;
    let orangePoints = 0;
    let yellowPoints = 0;
    let whitePoints = 0;
    let otherColorPoints = 0;
    let dividedByBlackPoints =0;
    totalPoints = redPoints + orangePoints + yellowPoints + whitePoints;
    let redball = 0;
    let yellowball = 0;
    let orangeball = 0;
    let whiteball = 0;

     for(let i = 1; i <= numberBalls; i++) {
        color = input[i]

    if( color === "red") {
        redPoints += 5
        totalPoints = redPoints + orangePoints + yellowPoints + whitePoints;
        redball += 1
    } if(color === "orange") {
        orangePoints += 10
        totalPoints = redPoints + orangePoints + yellowPoints + whitePoints;
        orangeball += 1
    } if( color === "yellow") {
        yellowPoints += 15
        totalPoints = redPoints + orangePoints + yellowPoints + whitePoints;
        yellowball += 1
    } if(color === "white") {
        whitePoints += 20
        totalPoints = redPoints + orangePoints + yellowPoints + whitePoints;
        whiteball += 1
    } if(color !== "red" && color !== "orange" && color !== "white" && color !== "black" && color !== "yellow") {
        otherColorPoints += 1
    
    }if( color === "black") {
        dividedByBlackPoints += 1
        totalPoints = totalPoints / 2
    }
    
}
    
 console.log(`Total points: ${Math.floor(totalPoints)}`)
 console.log(`Points from red balls: ${redball}`)
 console.log(`Points from orange balls: ${orangeball}`)
 console.log(`Points from yellow balls: ${yellowball}`)
 console.log(`Points from white balls: ${whiteball}`)
 console.log(`Other colors picked: ${otherColorPoints}`)
 console.log(`Divides from black balls: ${dividedByBlackPoints}`)
}
balls(["10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"])