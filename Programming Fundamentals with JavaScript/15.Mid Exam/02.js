function cubes(arr) {
    let sequence = arr.shift().map(Number)
    let command = arr.shift()

    while(command !== "Mort") {
        let tokens = command.split(" ")
        if(tokens[0] === "Add") {
            sequence.push(tokens[1])
        } else if(tokens[0] === "Remove") {
            let element = Number(tokens[1])
            let index = sequence.indexOf(element)
            if(index > -1) {
                sequence.splice(index, 1)
            }
            
            
        } else if(tokens[0] === "Replace") {
            let oldElement = Number(tokens[1]);
            let newIndex = sequence.indexOf(oldElement)
            if(newIndex !== -1) {
                sequence[newIndex] = Number(tokens[2])
            }
        } else if( tokens[0] === "Collapse") {
            let digit = Number(tokens[1]);

            sequence = sequence.filter(x => x >= digit);
        }



        command = arr.shift()
    }
    console.log(sequence.join(' '));
    
    


}

cubes(([[1, 4, 5, 19, 13, 42, 69, 24],
    "Add 1",
    "Remove 4",
    "Replace 1 26",
    "Mort"])
    )