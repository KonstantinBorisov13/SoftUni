function godzilla(buget, count, price) {
    buget = Number(buget)
    price = Number(price)
    count = Number(count)
    

    let decor = 0.1 * buget
    let wearprice = count * price
    let total = 0
    

    if( count > 150) {
        wearprice = wearprice * 0.9
       
    }

    total = decor + wearprice
    let diff = Math.abs(total - buget)

    if( total > buget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }

}

godzilla("20000",
"120",
"55.5")
