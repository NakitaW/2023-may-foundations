for (let i = 0; i <= 75; i++) {
    if (i % 3 === 0 && i % 9 === 0) {
        console.log("Double");
    } else if (i % 3 === 0) {
        console.log("Single");
    } else if (i % 7 === 0){
        console.log("SLEVEN");
    }
}