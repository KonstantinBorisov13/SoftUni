function solve(input) {
    let username = input.shift();
    let command = input.shift().split(' ');
    while (command[0] !== "Sign") {
        if (command[0] == "Case") {
            let [comm, type] = command
            if (type == "lower") {
                username = username.toLowerCase()
                console.log(username);
            } else if (type == "upper") {
                username = username.toUpperCase()
                console.log(username);
            }
        } else if (command[0] == "Reverse") {
            let [comm, start, end] = command;
            start = Number(start);
            end = Number(end);
            let word = username.substring(start, end + 1);
            word = Array.from(word)
            word = word.reverse().join('');
            word = word.toString();
            console.log(word);
        } else if (command[0] == "Cut") {
            let [comm, substr] = command;
            if (username.includes(substr)) {
                let element = substr;
                let newIndex = username.indexOf(element);
                if (newIndex > -1) {
                    username = Array.from(username);
                    username.splice(newIndex, 1);
                    username = username.join('');
                    username = username.toString();
                    console.log(username);
                }
            } else {
                console.log(`The word ${username} doesn't contain ${substr}.`);
            }
        } else if (command[0] == "Replace") {
            let [comm, char] = command;
            for (let i = 0; i < username.length; i++) {
                let oldElement = char;
                let index = username.indexOf(oldElement);
                if (index > -1) {
                    username = Array.from(username)
                    username[index] = '*';
                }
            }
            Array.from(username);
            username = username.join('')
            username = username.toString()
            console.log(username);
        } else if (command[0] == "Check") {
            let [comm, char] = command;
            if (username.includes(char)) {
                console.log("Valid");
            } else {
                console.log(`Your username must contain ${char}.`);
            }
        }
        command = input.shift().split(' ');

    }


}

solve(['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up'])