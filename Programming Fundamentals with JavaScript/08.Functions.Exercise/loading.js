function loading(n) {
    if(n === 100) {
        console.log(`100% Complete!\n[%%%%%%%%%%]`)
    } else if(n === 10) {
        console.log(`10% [%.........]\nStill loading...`);
    } else if(n === 20) {
        console.log(`20% [%%........]\nStill loading...`);
    }else if(n === 30) {
        console.log(`30% [%%%.......]\nStill loading...`);
    }else if(n === 40) {
        console.log(`40% [%%%%......]\nStill loading...`);
    }else if(n === 50) {
        console.log(`50% [%%%%%.....]\nStill loading...`);
    }else if(n === 60) {
        console.log(`60% [%%%%%%....]\nStill loading...`);
    }else if(n === 70) {
        console.log(`70% [%%%%%%%...]\nStill loading...`);
    }else if(n === 80) {
        console.log(`80% [%%%%%%%%..]\nStill loading...`);
    }else if(n === 90) {
        console.log(`90% [%%%%%%%%%.]\nStill loading...`);
    }

}

loading(80)