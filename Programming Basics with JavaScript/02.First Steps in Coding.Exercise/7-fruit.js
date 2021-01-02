function moneysum(pricestrawberies, quantitybananas, quantityoranges, quantityberries, quantitystrawberies) {

    pricestrawberies = Number(pricestrawberies);
    quantitybananas = Number(quantitybananas);
    quantityoranges = Number(quantityoranges);
    quantityberries = Number(quantityberries);
    quantitystrawberies = Number(quantitystrawberies);

    priceberries = 1/2 * pricestrawberies
    priceoranges = priceberries - (priceberries * 0.40);
    pricebananas = priceberries - (priceberries * 0.80);

    sumbananas = quantitybananas * pricebananas;
    sumoranges = quantityoranges * priceoranges;
    sumberries = quantityberries * priceberries;
    sumstrawberies = quantitystrawberies * pricestrawberies;

    totalsum = sumbananas + sumoranges + sumberries + sumstrawberies;

    console.log(totalsum);

}

moneysum("48",
"10",
"3.3",
"6.5",
"1.7")

