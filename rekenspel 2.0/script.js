const wrapper = document.getElementById('wrapper');
const myAssignment = document.getElementById('myAssignment');
const myAnswer = document.getElementById('myAnswer');
const feedback = document.getElementById('feedback');
const result = document.getElementById('result');

let mySum;
let sound = new Audio();

let lijst = [];

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
    lijst.push("");
    lijst.push(mySum);
    lijst.push(eval(mySum));
    lijst.push(myAnswer.value);
    lijst.push("");
    createTable();
    console.log(lijst);
    window.setTimeout(waiting, 2000)
    makeSum();
  }
}

function waiting(){
  console.log("waiting called");
  feedback.src = "img/blank.png";
  myAnswer.value = "";
}



function createTable(){
  let counter = 0;
  let space="";
  for(let i in lijst){
    switch(counter) {
      case 0:counter=1;space = "<tr>";
        break;
      case 1:counter=2;space += "<td>"+lijst[i]+"</td>";
        break;
      case 2: counter=3;space += "<td>"+lijst[i]+"</td>";
        break;
      case 3: counter=4;space += "<td>"+lijst[i]+"</td>";
        break;
      case 4:counter=0;space += "</tr>";
        break;}
  }
  result.innerHTML += space;
}

makeSum();
