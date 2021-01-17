function test(input) {
    let password = "";
    let n = input.shift();
    for(let i = 0; i < n; i++) {
        let line = input[i];
        let regex = /(?<symbols>.+)>(?<numbers>\d{3})\|(?<lowerChars>[a-z]{3})\|(?<upperChars>[A-Z]{3})\|(?<exception>[^<>]{3})<(\1)/;
        let matched = regex.exec(line);
        if(matched) {
        console.log(`Password: ${matched.groups.numbers + matched.groups.lowerChars + matched.groups.upperChars + matched.groups.exception}`)
        } else {
            console.log("Try another password!")
        }
        

}
}

test([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
  ]
  )