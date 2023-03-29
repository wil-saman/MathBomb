window.questionAnswer = null; 

window.playerScore = 0; //player's score, default = 0
window.maxScore = 0; //player's max score, default = 0
window.levelCounter = 0; //level counter, default = 0
window.timeLeft = window.gameConfig.defaultStartingTime;
window.timer = null;

window.runGameLevel = function() { //how many "levelCounter" needed in order to go to the next level.

    if (levelCounter <= window.gameConfig.levelAdvance) {
        console.log(levelCounter);
        levelDisplay.innerHTML = "Level 1";
        scoreShow.innerHTML = "Your Score = "+window.playerScore;
        createQuestionLevel1();
    }
    else if ((window.gameConfig.levelAdvance < levelCounter) && (levelCounter <= (window.gameConfig.levelAdvance*2)))  {
        console.log(levelCounter);
        levelDisplay.innerHTML = "Level 1 Advanced";
        scoreShow.innerHTML = "Your Score = "+window.playerScore;
        createQuestionLevel1A();
    }

    else if (((window.gameConfig.levelAdvance*2) < (levelCounter)) && (levelCounter <= (window.gameConfig.levelAdvance*3)))  {
        console.log(levelCounter);
        levelDisplay.innerHTML = "Level 2";
        scoreShow.innerHTML = "Your Score = "+window.playerScore;
        createQuestionLevel2();

    }

    else if (((window.gameConfig.levelAdvance*3) < (levelCounter)) && (levelCounter <= (window.gameConfig.levelAdvance*4)))  {
        console.log(levelCounter);
        levelDisplay.innerHTML = "Level 2 Advanced";
        scoreShow.innerHTML = "Your Score = "+window.playerScore;
        createQuestionLevel2A();

    }

    else if (((window.gameConfig.levelAdvance*4) < (levelCounter)) && (levelCounter <= (window.gameConfig.levelAdvance*5)))  {
        console.log(levelCounter);
        levelDisplay.innerHTML = "Level 3";
        scoreShow.innerHTML = "Your Score = "+window.playerScore;
        createQuestionLevel3();

    }

    else if (((window.gameConfig.levelAdvance*5) < (levelCounter)) && (levelCounter <= (window.gameConfig.levelAdvance*6)))  {
        console.log(levelCounter);
        levelDisplay.innerHTML = "Level 3 Advanced";
        scoreShow.innerHTML = "Your Score = "+window.playerScore;
        createQuestionLevel3A();

    }

    else if (((window.gameConfig.levelAdvance*6) < (levelCounter)) && (levelCounter <= (window.gameConfig.levelAdvance*7)))  {
        console.log(levelCounter);
        levelDisplay.innerHTML = "Level 4";
        scoreShow.innerHTML = "Your Score = "+window.playerScore;
        createQuestionLevel4();

    }

    else if (((window.gameConfig.levelAdvance*7) < (levelCounter)) && (levelCounter <= (window.gameConfig.levelAdvance*8)))  {
        console.log(levelCounter);
        levelDisplay.innerHTML = "Level 4 Advanced";
        scoreShow.innerHTML = "Your Score = "+window.playerScore;
        createQuestionLevel4A();

    }
    else {
        console.log(levelCounter);
        levelDisplay.innerHTML = "Challenge Mode";
        scoreShow.innerHTML = "Your Score = "+window.playerScore;
        createQuestionLevel5();

    }
}
