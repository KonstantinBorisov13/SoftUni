function working(hour, day) {
    hour = Number(hour);
    
    if( hour < 10 || hour > 18 || day === "Sunday") {
        console.log("closed");
        
    } else {
        console.log("open");
        
    }

}

working("19",
"Friday")






