window.createQuestionLevel2 = function() {
    let number1 = defineNumber(50);
    let number2 = defineNumber(50);
    let answer = number1 + number2;
    let questionGet = document.getElementById("Question");
    questionGet.innerHTML = number1+"+"+number2+"=";
    console.log(questionGet.innerHTML);
    window.questionAnswer = answer;
    console.log(number1,number2,answer);
    //level 2 code.
    // if ()
}

window.createQuestionLevel2A = function() {
    let number2 = defineNumber(75);
    let number1 = defineNumber(75);
    if (number1 >= number2) {
        let answer = number1 - number2;
        let questionGet = document.getElementById("Question");
        questionGet.innerHTML = number1+"-"+number2+"=";
        window.questionAnswer = answer;
    }
    else {
        createQuestionLevel2A();    
    }
    //level 2 A code.
    // console.log(number1,number2,answer);
}