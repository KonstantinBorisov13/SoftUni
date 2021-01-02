function cake(input) {
    let index = 2;
    let wid = Number(input[0])
    let leng = Number(input[1]);
    let size = wid * leng;
    let command = input[index]
    while(command !== "STOP") {
          let part = Number(command)
          index++
         part += part
         if(index === input[index - 1]) {
            break;
        }

    }

        let dif = Math.abs(size - part)
        if( size > part) {
            console.log(`${dif} pieces are left.`);
        } else if ( size < part) {
            console.log(`No more cake left! You need ${dif} pieces more.`);
        }

    

}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

