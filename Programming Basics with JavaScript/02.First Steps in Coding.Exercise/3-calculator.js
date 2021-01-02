function calc(amount, term, percent) {
    amount = Number(amount);
    term - Number(term);
    percent = Number(percent);

    let increasceForMonth = amount * percent / 100 /12  
    let result = amount + term * increasceForMonth;

    console.log(result)

}
calc("200",
"3",
"5.7");
