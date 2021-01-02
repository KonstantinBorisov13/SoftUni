function sumseconds(arg1, arg2, arg3) {
    arg1 = Number(arg1)
    arg2 = Number(arg2)
    arg3 = Number(arg3)
    totalTime = arg1 + arg2 + arg3

    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else{
        console.log(`${minutes}:${seconds}`)
    }
}
sumseconds("35", "45", "44")