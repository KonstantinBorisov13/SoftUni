function restaurant(input) {
    let command = input.shift().split('-');
    let liked = {};
    let count = 0;
    while (command[0] !== "Stop") {
        if (command[0] == "Like") {
            let [comm, name, food] = command;
            if (!liked.hasOwnProperty(name)) {
                liked[name] = food;
            } else {
                let values = Object.values(liked)
                if(values.includes(food)) {

                } else {
                    liked[name] +=`, ${food}`;
                }



            }

        } else if (command[0] == "Unlike") {
            let [comm, name, food] = command;
            if(liked.hasOwnProperty(name)) {
                let values = liked[name];
                if(!values.includes(food)) {
                    console.log(`${name} doesn't have the ${food} in his/her collection.`);
                    break;
                }
            else {
            delete liked[name];
            console.log(`${name} doesn't like the ${food}.`);
            count++;
            liked[name] = ""
            }
            } else {
                console.log(`${name} is not at the party.`);
            }


        }
        command = input.shift().split('-');

    }
    let entries = Object.entries(liked);
    for(let line of entries) {
        let[name, a,] = line;
        console.log(`${name}: ${a}`);
    } 
        console.log(`Unliked meals: ${count}`)

}

restaurant([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
  ])