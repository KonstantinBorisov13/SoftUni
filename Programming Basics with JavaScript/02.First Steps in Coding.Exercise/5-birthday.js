function party(price) {
    price = Number(price)

    let cake = price * 0.20;
    let drinks = cake - cake * 0.45;
    let animator = 1 / 3 * price;

    let result = cake + drinks + animator + price;
    console.log(result)

}

party("2250")