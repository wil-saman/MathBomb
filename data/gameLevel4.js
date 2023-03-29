window.createQuestionLevel4 = function() {
    let number1 = defineNumber(30);
    let number2 = defineNumber(30);
    let answer = number1 * number2;
    let questionGet = document.getElementById("Question");
    questionGet.innerHTML = number1+"*"+number2+"=";
    console.log(questionGet.innerHTML);
    window.questionAnswer = answer;
    console.log(number1,number2,answer);
    //level 4 Code.
    // if ()
}

window.createQuestionLevel4A = function() {
    let number1 = defineNumber(30);
    let answer = defineNumber(30);
    let number2 = number1 * answer;
    let questionGet = document.getElementById("Question");
    questionGet.innerHTML = number2+"/"+number1+"=";
    console.log(questionGet.innerHTML);
    window.questionAnswer = answer;
    console.log(number1,number2,answer);
    //level 4 A Code.
    // if ()
}