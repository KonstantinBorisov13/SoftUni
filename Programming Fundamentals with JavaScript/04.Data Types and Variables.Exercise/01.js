function sumDigit(n) {
    n = n.toString();
    let sum = 0;

    for(let i = 0; i < n.length; i++) {
        sum += Number(n.charAt(i));

    }
    console.log(sum);

}

sumDigit(245678)