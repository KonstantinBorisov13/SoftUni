function yard(sqmetres) {

    sqmetres = Number(sqmetres)
    price = sqmetres * 7.61
    discount = 0.18 * price
    fprice = 0.82 * price

    total = "The final price is" + " " + fprice + " " + "lv." +
    "The discount is" + " " + discount + " " + "lv."
    console.log(total)
}

yard("550")