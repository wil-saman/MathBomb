window.createParagraph = function (text) {
    var element = document.createElement("p");
    let textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
    //cretes paragraph function.
}

window.createHeading1 = function (text) {
    var element = document.createElement("h1");
    let textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
    //creates heading 1 function.
}

window.createHeading2 = function (text) {
    var element = document.createElement("h2");
    element.textContent = text;
    document.body.appendChild(element);
    return element;
    //creates heading 2 function.
}

window.createHeading3 = function (text) {
    var element = document.createElement("h3");
    element.textContent = text;
    document.body.appendChild(element);
    return element;
    //creates heading 3 function.
}

window.createDiv = function (text) {
    var element = document.createElement("div");
    if (typeof (text) !== 'undefined') {
        element.appendChild(text);
    }
    return element;
    //creates div function.
}

window.createSpan = function (text) {
    var element = document.createElement("span");
    textNode = document.createTextNode(text);
    element.appendChild(textNode);
    document.body.appendChild(element);
    return element;
    //creates span function.
}

window.createButton = function (text) {
    var element = document.createElement("button");
    textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
    //creates button function.
}

window.createInput = function (text) {
    var element = document.createElement("input");
    textNode = document.createTextNode(text);
    element.appendChild(textNode);
    document.body.appendChild(element);
    return element;
    //creates input function.
}

window.createTimer = function () {
    let element = createDiv();
    element.classList.add('timer');
    element.id = 'timer';

    return element;
    //creates timer function which basically create div with class and id timer.
}

window.renderTimer = function () {
    // Create timer element
    document.body.append(createTimer());

    // Clean any timer just in case there is anything existing
    window.clearInterval(window.timer);

    // Set interval to reduce timer one second at a time
    window.timer = window.setInterval(function () {
        window.timeLeft--;
        window.updateTimer();
    }, 10);

    // Call this first to render
    window.updateTimer();
}
window.updateTimer = function () { //updates the timer.
    let percentage = (window.timeLeft / window.gameConfig.defaultStartingTime * 100);
    var timerElement = document.getElementById('timer');
    timerElement.style.width = percentage + '%';

    if (percentage <= 0) { // what happens if the timer runs out.
        // do game over
        timeLeft = 1000;
        window.clearInterval(window.timer);
        document.body.innerHTML = "";
        renderLosePage();
    }
}

window.createPage = function () { //create the div page which will be used to insert the content of page.
    let page = createDiv();
    page.classList.add("page");
    return page;

}

window.renderMainPage = function () { //creates main page.

    let page = createPage();

    let title = createHeading1("Math Bomb");
    page.appendChild(title);
    title.classList.add("title");

    let playButton = createButton("Play");
    page.appendChild(playButton);
    playButton.classList.add("playButton");
    playButton.onclick = function () {
        document.body.innerHTML = "";
        renderPlayPage();
    }

    let scoreButton = createButton();
    page.appendChild(scoreButton);
    scoreButton.classList.add("scoreButton");
    scoreButton.innerHTML = '<img class="img111" src="images/scoreboard.svg">';
    scoreButton.onclick = function () {
        document.body.innerHTML = "";
        renderScoreboardPage();
    }

    let infoButton = createButton();
    page.appendChild(infoButton);
    infoButton.classList.add("infoButton");
    infoButton.innerHTML = '<img class="img111" src="images/info.svg">';
    infoButton.onclick = function () {
        document.body.innerHTML = "";
        renderInfoPage();
    }

    document.body.appendChild(page);
}

window.renderPlayPage = function () { //creates play page.

    let page = createPage();

    let title = createHeading1("Select a level :");
    page.appendChild(title);
    title.classList.add("title");

    let Level1 = createButton("Play");
    page.appendChild(Level1);
    Level1.classList.add("level1");
    Level1.innerHTML = "Level 1";
    Level1.onclick = function () {
        document.body.innerHTML = "";
        renderGameLevel1();
    }

    let Level2 = createButton();
    page.appendChild(Level2);
    Level2.classList.add("level2");
    Level2.innerHTML = 'Level 2';
    Level2.onclick = function () {
        document.body.innerHTML = "";
        renderGameLevel2();
    }

    let Level3 = createButton();
    page.appendChild(Level3);
    Level3.classList.add("level3");
    Level3.innerHTML = 'Level 3';
    Level3.onclick = function () {
        document.body.innerHTML = "";
        renderGameLevel3();
    }

    let Level4 = createButton();
    page.appendChild(Level4);
    Level4.classList.add("level4");
    Level4.innerHTML = 'Level 4';
    Level4.onclick = function () {
        document.body.innerHTML = "";
        renderGameLevel4();
    }

    let Level5 = createButton();
    page.appendChild(Level5);
    Level5.classList.add("level5");
    Level5.innerHTML = 'Challenge Mode';
    Level5.onclick = function () {
        document.body.innerHTML = "";
        renderGameLevel5();
    }

    let menuButton = createButton("Back to Main Menu");
    page.appendChild(menuButton);
    menuButton.classList.add("menuButton");
    menuButton.onclick = function () {
        document.body.innerHTML = "";
        renderMainPage();
    }

    document.body.appendChild(page);
}

window.createQuestionText = function () {//creates question's text div.
    let question = createDiv();
    question.id = "Question";
    question.classList.add("question");

    return question;
}

window.createAnswerText = function () {//creates answer div.
    let answer = createDiv();
    answer.id = "Answer";
    answer.classList.add("answer");

    return answer;
}

window.createQuestionBox = function () {//creates question box.
    let questionBox = createDiv();
    questionBox.classList.add("questionbox");

    let question = createQuestionText();
    let answer = createAnswerText();

    questionBox.appendChild(question);
    questionBox.appendChild(answer);

    return questionBox;
}

window.gameLevelRun = function () { //this will be runned to render the in-game page.

    let page = createPage();


    window.scoreShow = createHeading2("Your Score = " + window.playerScore);
    scoreShow.classList.add("scoreShow");
    page.appendChild(scoreShow);



    window.displayLevel = function () {
        let levelShow = "";
        window.levelDisplay = createHeading1(levelShow);
        levelDisplay.classList.add("levelShow");
        page.appendChild(levelDisplay);
    }

    displayLevel();

    page.appendChild(createQuestionBox());
    page.appendChild(createAndDisplayOnScreenKeyboard());

    document.body.appendChild(page);

    renderTimer();
    runGameLevel();
}

window.renderGameLevel1 = function () { //render level 1.
    window.levelCounter = 0;

    gameLevelRun();
}

window.renderGameLevel2 = function () { //render level 2.
    window.levelCounter = (window.gameConfig.levelAdvance * 2) + 1;

    gameLevelRun();
}

window.renderGameLevel3 = function () { //render level 3.
    window.levelCounter = (window.gameConfig.levelAdvance * 4) + 1;

    gameLevelRun();
}

window.renderGameLevel4 = function () { //render level 4.
    window.levelCounter = (window.gameConfig.levelAdvance * 6) + 1;

    gameLevelRun();
}

window.renderGameLevel5 = function () { //render level 5 or "Challenge mode".
    window.levelCounter = (window.gameConfig.levelAdvance * 8) + 1;

    gameLevelRun();
}

window.renderLosePage = function () { //render "You lose!" page.

    if (window.playerScore > window.maxScore) {

        window.maxScore = window.playerScore;
    }

    let page = createPage();

    let title = createHeading1("You lose");
    page.appendChild(title);
    title.classList.add("title");

    let playButton = createButton("Play Again");
    page.appendChild(playButton);
    playButton.classList.add("replayButton");
    playButton.onclick = function () {
        document.body.innerHTML = "";
        renderPlayPage();
    }

    let menuButton = createButton("Back to Main Menu");
    page.appendChild(menuButton);
    menuButton.classList.add("menuButton");
    menuButton.onclick = function () {
        document.body.innerHTML = "";
        renderMainPage();
    }
    document.body.appendChild(page);
}

window.renderInfoPage = function () { //render info page.

    let page = createPage();

    let title = createHeading1("How to play :");
    page.appendChild(title);
    title.classList.add("title");

    let howToPlay = createParagraph("Answer the math equation before the time runs out.");
    page.appendChild(howToPlay);
    howToPlay.classList.add("howToPlay");

    let creator = createParagraph("Game is Created by Timothy Wilbert.");
    page.appendChild(creator);
    creator.classList.add("creator");

    let menuButton = createButton("Back to Main Menu");
    page.appendChild(menuButton);
    menuButton.classList.add("menuButton");
    menuButton.onclick = function () {
        document.body.innerHTML = "";
        renderMainPage();
    }
    document.body.appendChild(page);
}

window.renderScoreboardPage = function () { //render scoreboard or "your highest score is" page.

    let page = createPage();

    let title = createHeading1("Your Highest Score is :");
    page.appendChild(title);
    title.classList.add("title");

    let score = createHeading1(window.maxScore);
    page.appendChild(score);
    score.classList.add("scoreboardScore");


    let menuButton = createButton("Back to Main Menu");
    page.appendChild(menuButton);
    menuButton.classList.add("menuButton");
    menuButton.onclick = function () {
        document.body.innerHTML = "";
        renderMainPage();
    }
    document.body.appendChild(page);
}



window.removeEverything = function() {
var x = document.getElementsByClassName("page");
x.innerHTML = "";
}