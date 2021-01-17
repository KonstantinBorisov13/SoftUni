function mirror(arr) {
    let str = arr[0]
    let regex = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;

    let matches = str.match(regex);
    let mirrorWords = [];
    if (matches) {
        console.log(`${matches.length} word pairs found!`);
        for (let match of matches) {
            let words = match.split(match[0]).filter(x => x != '');
            let isMirror = words[0] === words[1].split('').reverse().join('');
            if(isMirror) {
                mirrorWords.push(`${words[0]} <=> ${words[1]}`);

            }
            
        }
        if(mirrorWords.length !== 0) {
            console.log(`The mirror words are:`);
            console.log(mirrorWords.join(', '));
        }
    } else {
        console.log(`No word pairs found!`);

    }
    if(mirrorWords == 0) {
        console.log(`No mirror words!`);
    }

}

mirror(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])