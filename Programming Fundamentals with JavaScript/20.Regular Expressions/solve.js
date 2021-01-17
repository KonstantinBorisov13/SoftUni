function name([text]) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let matches = text.match(pattern);
    console.log(matches.join(' '));

    

}

name([`Ivan Ivanov, ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov, Test Testov`])