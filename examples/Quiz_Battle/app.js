

// questions object

let questions = [{
    question: "In what country was Nelson Mandela born?",
    answers: ["South Africa", "England", "India", "China"],
    rightSolutionIndex: 0
},
{
    question: "Adidas and Volkswagen are companies from what country?",
    answers: [ "Turkey", "Germany", "New Zealand", "Switzerland"],
    rightSolutionIndex: 1
},
{

    question: "Zurich is the largest city in what country?",
    answers: [ "Ireland", "France", "Belgium","Switzerland"],
    rightSolutionIndex: 3
}, 
{
    question: "In what country is the Great Pyramid of Giza found?",
    answers: ["Brazil", "USA", "Japan", "Egypt"],
    rightSolutionIndex: 3

}, 
{
    question: " In what country would you find the cities Lyon and Marseille?",
    answers: ["France", "Romania", "Estonia", "New Zealand"],
    rightSolutionIndex: 0
}, 
{
    question: "Leonardo da Vinci was born in what country?",
    answers: ["Belgium", "Italy", "Switzerland", "South Africa"],
    rightSolutionIndex: 1
}, 
{
    question: "What country has the second largest population in the world?",
    answers: ["India", "Egypt", "Germany", "Brazil"],
    rightSolutionIndex: 0

}, 
{
    question: "In what country would you find the cities Glasgow and Edinburgh?",
    answers: ["Ghana", "Scotland", "Jaban", "korea"],
    rightSolutionIndex: 1

}, 
{
    question: "What country has a maple leaf on their national flag?",
    answers: ["South Africa", "France", "Canada", "Russia"],
    rightSolutionIndex: 2

}, 
{
    question: "What country is home to the Great Barrier Reef?",
    answers: ["Egypt", "Germany", "Turkey", "Australia"],
    rightSolutionIndex: 3
},
{
    question: "Tapas and paella are dishes that originated in what country?",
    answers: ["Spain", "Sri Lanka", "Brazil", "Egypt"],
    rightSolutionIndex: 0
},
{
    question: "What country was the first to land a man on the moon?",
    answers: [ "China", "Turkey","USA", "Canada"],
    rightSolutionIndex: 2
}, 
{
    question: "What is the largest country (by size and population) in South America?",
    answers: ["Brazil", "Argentina", "Coba", "Bolivia"],
    rightSolutionIndex: 0
}, 
{
    question: "In what country is the Yangtze River found?",
    answers: ["sinegal", "China", "Egypt", "The Sudan"],
    rightSolutionIndex: 1
}, 
{
    question: "The kiwi is a flightless bird that lives in what country?",
    answers: ["USA", "Austria", "New Zealand" ,"Germany"],
    rightSolutionIndex: 2
},
{
    question: " In what country would you find the islands Santorini and Mykonos?",
    answers: ["Denmark", "Greece", "france", "Switzerland"],
    rightSolutionIndex: 1
}];


// get UI Elements and start question point

let gameLogin = document.querySelector(".gameLogin"),
    startPlay = document.querySelector("#startPlay"),
    card = document.querySelector(".mainCard"),
    progress = document.querySelector(".progress"),
    finalScore = document.querySelector("#finalScore"),
    userName= document.querySelector("#userName"),
    questionTitle = document.querySelector(".questionTitle"),
    questionsAnswers = document.querySelector(".questionsAnswers"),
    score = document.querySelector(".score"),
    scoreNumber = document.querySelector("#scoreNumber"),
    selectCountdown = document.querySelector("#selectCountdown"),
    progressBar = document.querySelector(".progress-bar"),
    cardContent = document.querySelector(".card-content"),
    startScore = 0,
    startQuestion = 0;

    gameLogin.querySelector("h2").classList.add('animated', 'bounce')
//start Play 

startPlay.addEventListener("click",startPlayGame);

function startPlayGame(){
    
    displayQuestion();
    intervalCountdown();

}
// display question and build UI

function displayQuestion(){

    // show questions card
    card.classList.add("show");

    // show progress
    progress.classList.add("show");
    // hide login page
    gameLogin.classList.add("hide");

    // display question title
    questionTitle.textContent = questions[startQuestion].question;

    questionsAnswers.innerHTML="";
    // display question Answers and build some UI
    questions[startQuestion].answers.forEach(function(answer){

        let answerList = document.createElement("li"),
            button = document.createElement("button"),
            answerText = document.createTextNode(answer);

            // add Class to list
            answerList.classList.add("collection-item");

            // append list inside UL
            questionsAnswers.appendChild(answerList);

            // append button inside List
            answerList.appendChild(button);

            // append text inside button
            button.appendChild(answerText);            

    });


};

// selectAnswer

questionsAnswers.addEventListener("click",selectAnswer);

function selectAnswer(e){

    let questionRightAnswer = questions[startQuestion].rightSolutionIndex;
    let clickedElement = e.target;
   
    console.log('selectAnswer');
    //check if text inside clicked list is the same with answer
    if(clickedElement.textContent === 
        questions[startQuestion].answers[questionRightAnswer]){

        clickedElement.classList.add("correct");
        // score result
        getScore();
    }else{

        let i = 0;

        while(i< questionsAnswers.childElementCount){
             if(questionsAnswers.children[i].textContent === 
                  questions[startQuestion].answers[questionRightAnswer]){
                
                
                    questionsAnswers.children[i].classList.add("correct");
               }
              i++;
        }
       

        clickedElement.classList.add("wrong");
    };

    let listElements = document.querySelectorAll(".questionsAnswers li button");
    
    listElements.forEach(function(listElement){

        listElement.setAttribute("disabled","true");

    });

    clearInterval(interval);
   
}

// get Score
function getScore(){
    startScore +=1;
    scoreNumber.textContent = startScore;

}

// next Question

let nextQuestionBtn = document.querySelector(".nextQuestionBtn");

nextQuestionBtn.addEventListener("click",nextQuestion);


function nextQuestion(){

 if(startQuestion < (questions.length-1)){
    clearInterval(interval);
    startQuestion++;
    countdown = 10;
    displayQuestion();
    calcProgress();

    intervalCountdown();
 }else{

    finalResult();
 }
 
}


function calcProgress(){

    
    //calculate progressbar
    
    progressBar.style.width = ((startQuestion / (questions.length-1)) * 100) + "%";
    
    progressBar.textContent = startQuestion + " of " + (questions.length-1);
}

function finalResult(){
    countdownContainer.classList.add("hide");
    questionTitle.classList.add("hide");
    nextQuestionBtn.classList.add("hide");
    questionsAnswers.classList.add("hide");    
    cardContent.classList.add("hide");
    score.classList.add("hide");     
    progress.classList.add("hide");

    card.classList.add("finalResult");
    

    startPlayAgain.classList.add("show");

    finalScore.innerHTML = userName.value + " Your Final Result : " + startScore;

    score.children[0].classList.add("newFontSize")

}




// play Againg
let startPlayAgain = document.querySelector(".startPlayAgain"),
    playAgainBtn = document.querySelector(".playAgainBtn");

    startPlayAgain.addEventListener("click",playAgain);

function playAgain(){

        document.location.reload(true);
}

// counter

let countdownNumberEl = document.getElementById('countdown-number'),
 countdown = 10,
 countdownContainer = document.querySelector("#countdown");

countdownNumberEl.textContent = countdown;
let interval;
function intervalCountdown(){
    interval = setInterval(function() {

       
        countdown = --countdown < 0 ? 10 : countdown;
      
        countdownNumberEl.textContent = countdown;

        if(countdown === 0){

            nextQuestion();
        }
        
      }, 1000);
}


