function projects(name, numberp, nhours) {

    numberp = Number(numberp)
    nhours = Number(nhours)

    nhours = numberp * 3

    fulldesc = "The architect" + " " + name + " " + "will need" + " " + nhours + " " + "hours" + " " + "to complete" + " " + numberp + " " + "project/s."

    console.log(fulldesc)

}

projects("George","4")
