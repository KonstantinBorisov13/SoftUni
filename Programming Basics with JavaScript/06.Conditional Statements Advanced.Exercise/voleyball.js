function voleyball(year, holiday, weekend) {
    holiday = Number(holiday);
    weekend = Number(weekend);
    let weekendsInSofia = 0;
    let playInSofia = 0;
    let holidayPlay = 0;
    let totalPlay = 0;
    let total = 0;

    weekendsInSofia = 48 - weekend;

    playInSofia = weekendsInSofia * 0.75;
    holidayPlay = holiday * 2/3;
    totalPlay = playInSofia + weekend + holidayPlay

    if( year === "leap") {
        total = totalPlay + ((totalPlay * 15) / 100)

        
    } else {
        total = totalPlay
    }


    console.log(Math.floor(total));

    


}

voleyball("normal",
"3",
"2")
