window.createQuestionLevel1 = function() {
    let number1 = defineNumber(10);
    let number2 = defineNumber(10);
    let answer = number1 + number2;
    let questionGet = document.getElementById("Question");
    questionGet.innerHTML = number1+"+"+number2+"=";
    console.log(questionGet.innerHTML);
    window.questionAnswer = answer;
    console.log(number1,number2,answer);
    //level 1 code.
    // if ()
}

window.createQuestionLevel1A = function() {
    // window.levelShow = "Level 1 Advanced";
    let number2 = defineNumber(20);
    let number1 = defineNumber(20);
    if (number1 >= number2) {
        let answer = number1 - number2;
        let questionGet = document.getElementById("Question");
        questionGet.innerHTML = number1+"-"+number2+"=";
        window.questionAnswer = answer;
    }
    else {
        createQuestionLevel1A();    
    }
    //level 1 A code.
    // console.log(number1,number2,answer);
}
