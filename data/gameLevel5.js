window.createQuestionLevel5 = function() {
    let number = defineNumber(8);

    if (number == 1) {
        createQuestionLevel1();
    }
    else if (number == 2) {
        createQuestionLevel1A();
    }
    else if (number == 3) {
        createQuestionLevel2();
    }
    else if (number == 4) {
        createQuestionLevel2A();
    }
    else if (number == 5) {
        createQuestionLevel3();
    }
    else if (number == 6) {
        createQuestionLevel3A();
    }
    else if (number == 7) {
        createQuestionLevel4();
    }
    else {
        createQuestionLevel4A();
    }
}

//Level 5 or "Challenge mode" consists of all four previous levels.