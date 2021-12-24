// Question 

var questionCollec = [{
    question: 'The lungs are protected by:?',
    option: ['Sternum', 'Rib cage', 'Backbone', 'All of the above'],
    answer: 'Sternum'},
{
    question: 'The primary function of the cerebrospinal fluid is to:',
    option: ['Protect the brain', 'Provide nutrients to the surrounding tissues', 'Remove waste products', 'All of the above'],
    answer: 'All of the above'
},
{
    question: 'Jellyfish breathe through',
    option: ['Book lungs', 'Gills', 'Diffusion', 'None of These'],
    answer: 'Diffusion'
},
{
    question: 'Humans have _____ lobes in the left lung',
    option: ['3', '2', '4', 'None of These'],
    answer: '2'
},
{
    question: 'Which of the following organisms have book lungs?',
    option: ['Spider', 'Ant', 'Penguin', 'Sealion'],
    answer: 'Spider'
},
{
    question: 'Night blindness and xerophthalmia are generally conditions associated with the deficiency of which vitamin?',
    option: ['Vitamin A', 'Vitamin K', 'Vitamin D', 'Vitamin B1'],
    answer: 'Vitamin A'
},
{
    question: ' Name the site where digestion of proteins occurs.',
    option: ['Pacreas', 'Rectum', 'Liver', 'Ileum'],
    answer: 'Ileum'
},

{
    question: 'The maximum amount of carbon dioxide in the human body is transported as:',
    option: ['Carbide', 'Bicarbonate', 'Amylase', 'None of these'],
    answer: 'Amylase'
},
{
    question: '___________ are functional units of food absorption.',
    option: ['Red blood cells    ', 'Small intestine    ', 'Villi', 'Aggregated lymphoid nodules    '],
    answer: 'Villi'
},
{
    question: 'Blood flows from the right atrium into the right ventricle via',
    option: ['the mitral valve','the semilunar valves','the tricuspid valve', 'None of these'],
    answer: 'the tricuspid valve'
},
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

// display questions
function displayQuestion() {
for (var a = 0; a < span.length; a++) {
    span[a].style.background = 'none';
}
question.innerHTML = 'Q.' + (i + 1) + ' ' + questionCollec[i].question;
option0.innerHTML = questionCollec[i].option[0];
option2.innerHTML = questionCollec[i].option[2];
option1.innerHTML = questionCollec[i].option[1];
option3.innerHTML = questionCollec[i].option[3];
main.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionCollec.length;
}

//calculate scores
function calcScore(e) {
if (e.innerHTML === questionCollec[i].answer && score < questionCollec.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = 'limegreen';
} else {
    document.getElementById(e.id).style.background = 'tomato';
}
setTimeout(nextQuestion, 300);
}

//next question
function nextQuestion() {
if (i < questionCollec.length - 1) {
    i = i + 1;
    displayQuestion();
} else {
    points.innerHTML = score + '/' + questionCollec.length;
    quizContainer.style.display = 'none';
    scoreboard.style.display = 'block'
}
}

//next button
next.addEventListener('click', nextQuestion);

//Back to Quiz 
function backToQuiz() {
location.reload();
}

//check Answers
function checkAnswer() {
var answerColl = document.getElementById('answerColl');
var answers = document.getElementById('answers');
answerColl.style.display = 'block';
scoreboard.style.display = 'none';
for (var a = 0; a < questionCollec.length; a++) {
    var list = document.createElement('li');
    list.innerHTML = questionCollec[a].answer;
    answers.appendChild(list);
}
}


displayQuestion();