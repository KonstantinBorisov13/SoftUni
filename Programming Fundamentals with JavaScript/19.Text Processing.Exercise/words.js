function words(words, str) {
    words = words.split(', ');

    for (let word of words) {
        let charsCount = word.length;
        let starsString = '*'.repeat(charsCount);
        str = str.replace(starsString, word);
    }
    console.log(str);
}

words('great',
    'softuni is ***** place for learning new programming languages'
)