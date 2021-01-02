function scholarship(income, averageGrade, salary) {
    income = Number(income);
    averageGrade = Number(averageGrade);
    salary = Number(salary);
    socialScholarship = 0;
    gradeScholarship = 0;


    if(income < salary && averageGrade > 4.5) {
        socialScholarship = 0.35 * salary
    }


    if(averageGrade >= 5.5) {
        gradeScholarship = averageGrade * 25
    }


    if(socialScholarship = 0) {
        console.log(`You cannot get a scholarship!`);
        
    } else if(socialScholarship > gradeScholarship) {
        console.log(`You get a Social scholarship ${Math.trunc(socialScholarship)} BGN`);
        
    } else if( income < salary && averageGrade >= 5.5 && gradeScholarship > socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.trunc(gradeScholarship)} BGN`);
        
    }

    

}

