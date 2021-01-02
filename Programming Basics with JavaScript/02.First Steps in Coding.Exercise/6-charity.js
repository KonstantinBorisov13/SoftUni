function charity(days, cooks, cakes, waffles, pancakes) {

    days = Number(days);
    cooks = Number(cooks);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    let cakesAmount = cakes * cooks * days * 45;
    let wafflesAmount = waffles * cooks * days * 5.80;
    let pancakesAmount = pancakes * cooks * days * 3.20;

    let result = cakesAmount + wafflesAmount + pancakesAmount;
    result -= 1 / 8 * result;

    console.log(result);

}
charity("23",
"8",
"14",
"30",
"16")

