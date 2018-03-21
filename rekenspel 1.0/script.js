const wrapper = document.getElementById('wrapper');
const myAssignment = document.getElementById('myAssignment');
const myAnswer = document.getElementById('myAnswer');
const feedback = document.getElementById('feedback');

let mySum;
let sound = new Audio();


function makeSum(){
  console.log("makeSum called");
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  mySum = a + " * " + b;
  myAssignement.innerHTML = mySum;
  myAnswer.focus();
}

function keyPressed(event){
  var key = event.which || event.keyCode;
  if(key == 13){
    if(eval(mySum) == myAnswer.value){
      feedback.src = "img/good.png";
      sound.src = "img/right.wav";
      sound.play();
      console.log("Right answer");
    }else{
      feedback.src = "img/wrong.png";
      sound.src = "img/wrong.mp3";
      sound.play();
      console.log("Wrong answer");
    }
    window.setTimeout(waiting, 2000)
    makeSum();
  }
}

function waiting(){
  console.log("waiting called");
  feedback.src = "img/blank.png";
  myAnswer.value = "";
}

makeSum();
