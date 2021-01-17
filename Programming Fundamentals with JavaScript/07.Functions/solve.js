function grade(n) {
    let gradeOpinion = ""
    if(n < 3.00) {
        gradeOpinion = "Fail"
        console.log("Fail (2)");

    } else if(n >= 3.00 && n < 3.50) {
        gradeOpinion = "Poor"
        console.log(`${gradeOpinion} (${n.toFixed(2)})`);
    } else if(n>= 3.50 && n < 4.50) {
        gradeOpinion = "Good"
        console.log(`${gradeOpinion} (${n.toFixed(2)})`);
    } else if(n >= 4.50 && n < 5.50) {
        gradeOpinion = "Very good"
        console.log(`${gradeOpinion} (${n.toFixed(2)})`);
    } else if(n >= 5.50 && n <= 6.00) {
        gradeOpinion = "Excellent"
        console.log(`${gradeOpinion} (${n.toFixed(2)})`);
    }

    

}

grade(2.50)