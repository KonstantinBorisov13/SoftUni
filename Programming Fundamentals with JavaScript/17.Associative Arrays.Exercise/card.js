function card(arr) {
    let players = {};

    for(let line of arr) {
        [name, hand] = line.split(': ');
        hand = hand.split(', ');

        players[name] = hand;
    }
    console.log(players);

}

card([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )