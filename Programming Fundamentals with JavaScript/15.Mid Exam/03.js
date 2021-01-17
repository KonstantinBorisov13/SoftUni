function cards(arr) {
    let sequence = arr.shift().toString();
    let deck = [];
    let command = arr.shift();
    let newSequence = sequence.split(":");

    while (command !== "Ready") {
        let tokens = command.split(" ")
        if (tokens[0] === "Add") {
            if (newSequence.includes(tokens[1])) {
                deck.push(tokens[1])
            } else {
                console.log("Card not found.");
            }
        } else if (tokens[0] === "Insert") {
            if (newSequence.includes(tokens[1])) {
                let index = tokens[2];
                deck.splice(index, 0, tokens[1])
            } else {
                console.log("Error!");
            }
        } else if( tokens[0] === "Remove") {
            if(deck.includes(tokens[1])) {
                let element = tokens[1];
                let newIndex = deck.indexOf(element)
                if(newIndex > -1) {
                    deck.splice(newIndex,1)
                }
            } else {
                console.log("Card not found.");
            }
        } else if(tokens[0] === "Swap") {
            let oldElement = tokens[1];
            let index2 = deck.indexOf(oldElement);
            if(index2 !== -1) {
                deck[index2] = (tokens[2])
                deck.splice(1,1, oldElement)
                
                
            }

        } else if(tokens[0] === "Shuffle" && tokens[1] === "deck") {
            deck = deck.reverse()
        }

        command = arr.shift()
    }
    console.log(deck.join(" "));

}

cards(["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
"Add Pop",
"Add Exodia",
"Add Aso",
"Remove Wrath",
"Add SineokBqlDrakon",
"Shuffle deck",
"Insert Pesho 0",
"Ready"])
