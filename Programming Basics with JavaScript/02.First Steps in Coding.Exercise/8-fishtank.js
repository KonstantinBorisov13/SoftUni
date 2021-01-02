function sizes(lengthinsm, widthinsm, heightinsm, percent) {
    lengthinsm = Number(lengthinsm);
    widthinsm = Number(widthinsm);
    heightinsm = Number(heightinsm);
    percent = Number(percent);

    percentp = percent / 100

    volumesm = lengthinsm * widthinsm * heightinsm;
    volumel = volumesm * 0.001;

    sumlitres = volumel * (1 - percentp);

    console.log(sumlitres)

}

sizes("85","75","47","17")
