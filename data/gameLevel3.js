window.createQuestionLevel3 = function() {
    let number1 = defineNumber(15);
    let number2 = defineNumber(15);
    let answer = number1 * number2;
    let questionGet = document.getElementById("Question");
    questionGet.innerHTML = number1+"*"+number2+"=";
    console.log(questionGet.innerHTML);
    window.questionAnswer = answer;
    console.log(number1,number2,answer);
    //level 3 code.
    // if ()
}

window.createQuestionLevel3A = function() {
    let number1 = defineNumber(15);
    let answer = defineNumber(15);
    let number2 = number1 * answer;
    let questionGet = document.getElementById("Question");
    questionGet.innerHTML = number2+"/"+number1+"=";
    console.log(questionGet.innerHTML);
    window.questionAnswer = answer;
    console.log(number1,number2,answer);
    //level 3 A code.
    // if ()
}



// window.createQuestionLevel3A = function() {
//     let number2 = defineNumber(30);
//     let number1 = defineNumber(30);
//     if (~~(number1 / number2)) {
//         let answer = number1 / number2;
//         let questionGet = document.getElementById("Question");
//         questionGet.innerHTML = number1+"/"+number2+"=";
//         window.questionAnswer = answer;
//     }
//     else {
//         createQuestionLevel3A();    
//     }
//     // console.log(number1,number2,answer);
// }