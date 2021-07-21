
// Creating questionss and answers
//*****************************************************************************
var question1 = {
    question: "Куда посадите ребенка делать уроки?",
    answers: ["За кухонный стол. Поучит уроки и заодно поужинает.", "Посажу в гостиной и буду сидеть рядом.", "Организую место в детской.", "Место не так важно. Важнее, чтобы он не отвлекался."],
    correct: 0,
  };

var question2 = {
    question: "А если детей двое?",
    answers: ['Будут заниматься по очереди.', 'У каждого ребенка должно быть свое рабочее место.', 'Один учится на кухне, другой – в гостиной.', 'Пусть делают уроки на продленке.'],
    correct: 2,
  };

  



// create an array of objects

var questions = [question1, question2];

// Initialize variables
//------------------------------------------------------------------

var tags;
var tagsClass = '';
var liTagsid = [];
var correctAns = 0;
var quizPage = 1;
var progress = 1

var currentIndex = 0;
var currentQuestion = questions[currentIndex];

var prevousQuestion;
var previousIndex = 0;

var ulTag = document.getElementsByTagName('ul')[0];
var button = document.getElementById('submit');
var questionTitle = document.getElementById('question');

var addNewImg = document.getElementById('img');





//save class name so it can be reused easily
//if I want to change it, I have to change it one place
var classHighlight = 'selected';


// Display Answers and hightlight selected item
//------------------------------------------------------------------
function showQuestions (){

if (currentIndex != 0) {
// create again submit button only for next pages
ulTag.innerHTML ='';
button.innerHTML = 'Submit';
button.className = 'submit';
button.id = 'submit';

//update the number of questions displayed
document.getElementById('quizNumber').innerHTML = quizPage;
document.getElementById('progress').value = progress;
}

//Display Results in the final page
//   if (currentIndex ==  (questions.length)) {
//     ulTag.innerHTML = '';
//     document.getElementById('question').innerHTML = '';

//     showResults();

//     return
//   }

questionTitle.innerHTML = currentQuestion.question;

console.log(currentQuestion.question);

// create a for loop to generate the answers and display them in the page
for (var i = 0; i < currentQuestion.answers.length; i++) {
// creating answers
var newAns = document.createElement('li');
newAns.id = 'ans'+ (i+1);
newAns.className = "notSelected";
var textAns = document.createTextNode(currentQuestion.answers[i]);
newAns.appendChild(textAns);
var addNewAnsHere = document.getElementById('answer');
addNewAnsHere.appendChild(newAns);


}
var numb = 1
var newImg = document.createElement('img');
newImg.className = "test-img";
newImg.src = "img/test" + numb + ".png"
var addNewImg = document.getElementById('img');
addNewImg.appendChild(newImg);
numb++
//----------------------------------img add





//---------------------


//.click() will return the result of $('.notSelected')
var $liTags = $('.notSelected').click(function(list) {
list.preventDefault();
//run removeClass on every element
//if the elements are not static, you might want to rerun $('.notSelected')
//instead of the saved $litTags
$liTags.removeClass(classHighlight);
//add the class to the currently clicked element (this)
$(this).addClass(classHighlight);

//get id name of clicked answer
for (var i = 0; i < currentQuestion.answers.length ; i++) {
// console.log(liTagsid[i]);
if($liTags[i].className == "notSelected selected"){
//store information to check answer
tags = $liTags[i].id;
// tagsClass = $LiTags.className;
console.log(tags);
tagsClassName = $liTags[i];
}
}
});

//check answer once it has been submitted
button.onclick = function (){ checkAnswer()};
}

//self calling function
showQuestions();


// Show Correct Answer
//------------------------------------------------------------------
function checkAnswer (){
// get selected list
var selectedItem = document.getElementById(tags);

// check that an answer has been selected
if (selectedItem == undefined) {
alert("Please selected an answer!")
return
} else {
// get user answer if form of text
var userAns = selectedItem.innerHTML;
}

// change the background of the answer according to the Results
if (userAns == currentQuestion.answers[currentQuestion.correct]) {
console.log("Correct! The answer is: "+ userAns);
// change color of selected item by changing className
selectedItem.className = 'correct';
// count the number of correct answers
correctAns++;
console.log(correctAns);
} else {
console.log("Wrong! The corrent answer is: "+  currentQuestion.answers[currentQuestion.correct]);
//change the background of the wrong answer
selectedItem.className = 'wrong';
//hightlight the right answer if the user got it wrong
//change the class name of the correct answer
ulTag.getElementsByTagName('li')[currentQuestion.correct].className = 'correct';

console.log(currentQuestion.answers[currentQuestion.correct]);
}

// Create a next Question button once the answer has been submitted
button.innerHTML = 'Next Question';
button.className = 'next';
button.id = 'next';

prevousQuestion = currentQuestion;
quizPage++;
progress++;
currentIndex++;
currentQuestion = questions[currentIndex];


// Start with the next question once the "Next" button has been clicked
button.onclick = function (){showQuestions()};
return
}

// Final score
//------------------------------------------------------------------
function showResults () {
//deleting page number
document.getElementById('pages').innerHTML='';

// Change Title
questionTitle.innerHTML = '<h1>Your Score</h1>';

// Get the area that will be used to display the user's score
var newInfo = document.getElementById('quiz-results');
//Change the id and className of the area for the circle
newInfo.innerHTML = '';
newInfo.id = 'circle';
newInfo.className = 'circle';


//Create a Div for the fill element
var newDiv = document.createElement('div');
newDiv.className = 'fill';
var addHere = document.getElementById('circle');
addHere.appendChild(newDiv);

// add the score to the circle
var newScore = document.createElement('h3');
newScore.className = 'score';
var textScore = document.createTextNode(Math.floor((correctAns/questions.length)*100) + '%');
newScore.appendChild(textScore);
addHere.appendChild(newScore);

//use jquary to grab the text of the score
var score = $(".score").text();

//fill the circle in base of the score
$(".fill").css("height",score);

if (correctAns >= 5) {
var newCongrats = document.createElement('p');
var textCongrats = document.createTextNode('Congratulations! You did a Good Job!')
newCongrats.appendChild(textCongrats);
document.getElementById('display-area').appendChild(newCongrats);

confettiEffect();
}

}



$(document).ready(function(){
   

  var question1 = {
      question: "Куда посадите ребенка делать уроки?",
      answers: ["За кухонный стол. Поучит уроки и заодно поужинает.", "Посажу в гостиной и буду сидеть рядом.", "Организую место в детской.", "Место не так важно. Важнее, чтобы он не отвлекался."],
      correct: 0,
      img: "img/test1.png",
      text: ["Во время учебы крайне важно, чтобы ребенок не отвлекался на посторонние предметы, звуки и игрушки. Постарайтесь отделить письменный стол от игровой, столовой или гостиной зоны.", "Это можно легко сделать с помощью стеллажа,  шкафа или передвижной ширмы."]
    };
  
  var question2 = {
      question: "А если детей двое?",
      answers: ['Будут заниматься по очереди.', 'У каждого ребенка должно быть свое рабочее место.', 'Один учится на кухне, другой – в гостиной.', 'Пусть делают уроки на продленке.'],
      correct: 2,
      img: "img/test2.png",
      text: ["Во время учебы крайне важно, чтобы ребенок не отвлекался на посторонние предметы, звуки и игрушки. Постарайтесь отделить письменный стол от игровой, столовой или гостиной зоны.", "Это можно легко сделать с помощью стеллажа,  шкафа или передвижной ширмы."]

    };
  

  var questions = [question1, question2];
  var currentIndex = 0;
  var currentQuestion = questions[currentIndex];




  var ok_src= "img/ok.png"
  var oks = Array("Правильно!", "Верно!", 'Отлично!', "Браво!", "Точно!", "Да!", "Так и есть!", "Изумительно!");
  var ok = oks[Math.floor(Math.random()*oks.length)];

   

  $(".quest-title").append("<h2></h2>")
  $(".quest-title h2").append(questions[0].question)
  $(".quest-title").append("<ul></ul>")
  $(".quest-img").append("<img>")


  for (var i = 0; i < currentQuestion.answers.length; i++) {
      $(".quest-title ul").append("<li>" + currentQuestion.answers[i] + "</li>")
      $(".quest-img img").attr("src", );
  }

  
      $(".quest-img img").attr("src", currentQuestion.img );
  

  $(".quest-title ul li").on('click' , function(){
    $(".quest-title h2").hide()
    $(".quest-title ul").hide()
    $(".quest-title").append("<img src="+ok_src+">")
    $(".quest-title").append("<h3></h3>")
    $(".quest-title h3").append(ok)

    for (var i = 0; i < currentQuestion.text.length; i++) {
      $(".quest-title").append("<p>"+ currentQuestion.text[i] + "</p>") ;
    }

    
  $(".quest-title").append("<div class='btn'></div>")
  $(".quest-title .btn").append("<buttton id='back'>Назад</button>")
  $(".quest-title .btn").append("<buttton id='go'>Дальше</button>")
  
  

  });





});