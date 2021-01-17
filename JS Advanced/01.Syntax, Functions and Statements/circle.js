function circle(a) {
    if(typeof a == 'number') {
        let area = Math.PI * a**2;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof a}.`);
    }

}

circle(5)