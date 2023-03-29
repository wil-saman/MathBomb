window.gameConfig = {
    defaultStartingTime: 1000, // how long will the time last in miliseconds, default = 1000
    levelAdvance: 2, // mode change after level counter reaches certain number, default = 5

};


window.defineNumber = function(text) { //defines a number between 1 - 10
    let number = Math.random() * text;
    let finalNumber = Math.floor(number); 
    if (finalNumber > 0) {
        return finalNumber;
    }
    else {
        return finalNumber+1;
    }
}

// window.multiplyNumber = function() {
//     let number = Math.random() * 10;
//     let finalNumber = Math.floor(number); 
//     return finalNumber;
// }
