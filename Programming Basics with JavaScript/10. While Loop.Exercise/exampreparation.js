function exampreparation(arr) {
    let countPoorGrades = Number(arr[0]);
    let currentProblem = arr[1];
    let poorGrades = 0;
    let currentGrade = Number(arr[2])
    let index = 1
    let sum = 0
    let problemCount = 0


    while(currentProblem !== "Enough") {
        sum += currentGrade
        problemCount++
        if(currentGrade <= 4) {
            poorGrades++
        }

        if( poorGrades === countPoorGrades) {
            console.log(`You need a break, ${poorGrades} poor grades.`);
            break;
            
        }
        index += 2
        currentProblem = arr[index]
        currentGrade = Number(arr[index + 1])

    }
    let avg = sum / problemCount

    if(poorGrades != countPoorGrades) {
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${arr[index - 2]}`);
        
        
        
    }

}

exampreparation(["2",
"Income",
"3",
"Game", "Info",
"6",
"Best", "Player",
"4"])
