const myQuestion = document.getElementById('myQuestion');
const answerBox = document.getElementById('answerBox');

let counter = 0;
let sound = new Audio();

function makeQuestion() {
  myQuestion.innerHTML = quiz[counter].question;
  answerBox.innerHTML = "";
  for(let i = 0; i< quiz[0].answers.length; i++){
    let li = document.createElement('li');
    li.innerHTML = quiz[counter].answers[i].answer;
    answerBox.appendChild(li);
    li.feedback = quiz[counter].answers[i].feedback;
    li.addEventListener('click',evaluate)
  }
}

function evaluate(evt) {
  console.log(evt.target.feedback);
  if(evt.target.feedback == true){
    sound.src = "sounds/right.wav"; sound.play();
    evt.target.style.backgroundColor="green";
  }else{sound.src = "sounds/wrong.mp3"; sound.play();   evt.target.style.backgroundColor="red";}
  counter++;
  if(counter<quiz.length){
    window.setTimeout(makeQuestion, 1000);
  }else{
    finishQuiz();
  }
}

function finishQuiz() {
  console.log("quiz klaar");
}

makeQuestion();
