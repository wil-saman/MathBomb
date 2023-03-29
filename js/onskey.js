/*
Create the 3 rows of a keyboard.
*/
window.createKeyboard = function () {
    let keyboard = createDiv();
    keyboard.classList.add("keyboard");
    return keyboard;

}


window.createAndDisplayOnScreenKeyboard = function () { //Create and display keyboard for in-game keyboard.
    
    let keyboard = createKeyboard();

    var rows = [
        ["7", "8", "9", "←"],
        ["4", "5", "6", "Enter"],
        ["1", "2", "3", "0"]
    ];
    for (var rowIndex in rows) {
        var row = rows[rowIndex];
        // create a container for the entire row, and append it
        var rowDiv = createDiv();
        rowDiv.classList.add("keyboard-row");
        keyboard.appendChild(rowDiv);
        // create EACH button for the current row
        for (var index in row) {
            // get the key character string from the array
            var key = row[index];
            // create the button element
            var button = createButton(key);
            // add the event handler, so the button click does something
            addEventHandlerForOnScreenKey(button, key);
            // add it to our rowdiv
            rowDiv.appendChild(button);
        } // end of ROW for-loop
    } // end of ROWS for-loop
    return keyboard;
}

let addEventHandlerForOnScreenKey = function (button, key) { //event handler for the keys on the keyboard.
    button.onclick = function (event) {
        event.preventDefault();
        let getAnswer = document.getElementById("Answer");
         let value = getAnswer.innerHTML;
        if (key == "←") { //if statement for "backspace"
            let newValue = value.substring(0, value.length - 1);
            console.log(newValue);
            getAnswer.innerHTML = newValue;
        }
        else if (key == "Enter") { //if statement for enter.
            if (questionAnswer == value) {
                console.log("your answer is correct!");
                playerScore++;
                levelCounter++;
                runGameLevel();
                getAnswer.innerHTML = "";
                timeLeft = timeLeft + 400;
                if (timeLeft > window.gameConfig.defaultStartingTime) {
                    timeLeft = window.gameConfig.defaultStartingTime;
                }

                updateTimer();

                console.log(timeLeft);
            }
            else {
                getAnswer.innerHTML = "";
                console.log("Your answer is wrong!");
            }
        }
        else {
            let getAnswerKey = document.createTextNode(key);
            getAnswer.appendChild(getAnswerKey);
        }

    }
}

