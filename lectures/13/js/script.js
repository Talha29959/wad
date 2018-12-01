const question=document.getElementById("question");
const choiceA= document.getElementById("A");
const choiceB= document.getElementById("B");
const choiceC= document.getElementById("C");
const choiceD= document.getElementById("D");

let questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}];
let currentQuestion = 0;
const lastQuestion= questions.length;
let correctAnswers=0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    currentQuestion+=1;
    if(currentQuestion===lastQuestion){
        displayScore();
    }
    displayScore();
    document.getElementById("choice-list").innerHTML = '';
    displayCurrentQuestion();
}
function displayCurrentQuestion() {
    let q=questions[currentQuestion];
    question.innerHTML= q.question;
    for (let i = 0; i < 4; i++)
    {
        document.getElementById("choice-list").innerHTML+='<input type="radio" name="check">'+q.choices[i]+"<br>";
    }
}

function checkAnswer(answer){
    let q=questions[currentQuestion];
    k=answer;
    if(answer==q.correctAnswer){
        correctAnswers++;
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + lastQuestion;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}