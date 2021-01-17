function certificate(grade, namesArr) {
    if(pass(grade)) {
        printHeader();
        console.log(getName(namesArr));
        formatGrade(grade)

    } else {
        console.log(getName(namesArr) + "does not qualify");
    }

    function pass(grade) {
        return grade >= 3;
    }

    function printHeader() {
        console.log(`~~~-   {@}  -~~~~`);
        console.log(`~- Certificate -~`);
        console.log(`~~~-  ~---~  -~~~`);
    }

    function getName(nameArr) {
        return nameArr[0] + " " + nameArr[1];
    }
    function formatGrade(n) {
    
        let result = ""
        if(n < 3.00) {
            gradeOpinion = "Fail"
    
        } else if(n >= 3.00 && n < 3.50) {
            result = `Poor (${grade.toFixed(2)})`
        } else if(n>= 3.50 && n < 4.50) {
            result = `Good (${grade.toFixed(2)})`
        } else if(n >= 4.50 && n < 5.50) {
            result = ` Very good (${grade.toFixed(2)})`
        } else if(n >= 5.50 && n <= 6.00) {
            result = `Excellent (${grade.toFixed(2)})`
        }
        console.log(result)
    }
    

}

certificate(5.25, ['Peter', 'Carter'])