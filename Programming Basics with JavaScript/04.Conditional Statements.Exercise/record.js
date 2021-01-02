function swimRecord(record, distance, time) {
    record = Number(record);
    distance = Number(distance);
    time = Number(time);

    let ivantime = distance * time;
    let slow = Math.floor(distance / 15) * 12.5;
    ivantime += slow;

    if( ivantime < record) {
        console.log(`Yes, he succeeded! The new world record is ${ivantime.toFixed(2)} seconds.`)
    } else {
        let diff = ivantime - record
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

}

swimRecord("10464",
"1500",
"20")
