function messsage(messsage) {
    let words = 0

    for( let i = 0; i < messsage.length; i++) {
        let symbol = messsage[i]

        if( symbol === ' ') {
            words++
        }
    }


    words++

    if( words <= 10) {
        console.log("The message was send successfully!");
        
    } else {
        console.log(`The message is too long to be send! Has ${words} words.`);
        
    }



}

messsage("This message has exactly eleven words. One more as it's allowed!")