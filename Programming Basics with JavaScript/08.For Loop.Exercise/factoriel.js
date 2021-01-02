function factoriel(n) {
    n = Number(n)

    let product = 1

    for( let i = n; i >= 2; i-- ) {
        product *= i
    }
    console.log(product);
    

}

factoriel("5")