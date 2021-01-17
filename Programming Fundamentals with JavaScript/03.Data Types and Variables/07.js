function century(century) {
    century = Number(century);

    let days = 0;
    let years = 0;
    let hours = 0;
    let minutes = 0;

    years = century * 100
    days = Math.floor(years * 365.2422)
    hours = days * 24
    minutes = hours * 60


    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);



}

century(1)