function readingBooks(pages, speed, days) {

     pages = Number(pages);
     speed = Number(speed);
     days = Number(days);

    let neededTime = pages / speed / days;

    console.log(neededTime)

}

readingBooks("212",
    "20",
    "2")
readingBooks("432",
"15",
"4")

