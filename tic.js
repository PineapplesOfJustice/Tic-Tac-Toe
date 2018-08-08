var namespace = "http://www.w3.org/2000/svg"

//variables
var x=1
var bomb=0
var tNt=0
var cross=0
var denotate=0

//events
document.addEventListener('click', player);
document.addEventListener('click', finish);
document.addEventListener('keypress', restart);

//press space to restart
function restart(){
  var s = event.keyCode;
  // spacebar
  if (s == 32 || denotate !=0) {
    location.reload(true);
  }
}

//keep track of who is going and determine the winner
function player(){
  if(x == 1 ){
    document.getElementById("turn").innerHTML = "Player 1's Turn";
    if(t1==2 && t2==2 && t3==2){
      bomb=1
      denotate=2
    }
    else if(t4==2 && t5==2 && t6==2){
      bomb=2
      denotate=2
    }
    else if(t7==2 && t8==2 && t9==2){
      bomb=3
      denotate=2
    }
    else if(t1==2 && t4==2 && t7==2){
      tNt=1
      denotate=2
    }
    else if(t2==2 && t5==2 && t8==2){
      tNt=2
      denotate=2
    }
    else if(t3==2 && t6==2 && t9==2){
      tNt=3
      denotate=2
    }
    else if(t1==2 && t5==2 && t9==2){
      cross=1
      denotate=2
    }
    else if(t3==2 && t5==2 && t7==2){
      cross=2
      denotate=2
    }
    //if there is a tie
    else if( t1 > 0 && t2 > 0 && t3 > 0 && t4 > 0 && t5 > 0 && t6 > 0 && t7 > 0 && t8 > 0 && t9 > 0)
    {
      denotate=3
    }
  }
  //continue from above sett player 2
  else{
    document.getElementById("turn").innerHTML = "Player 2's Turn";
    if(t1==1 && t2==1 && t3==1){
      bomb=1
      denotate=1
    }
    else if(t4==1 && t5==1 && t6==1){
      bomb=2
      denotate=1
    }
    else if(t7==1 && t8==1 && t9==1){
      bomb=3
      denotate=1
    }
    else if(t1==1 && t4==1 && t7==1){
      tNt=1
      denotate=1
    }
    else if(t2==1 && t5==1 && t8==1){
      tNt=2
      denotate=1
    }
    else if(t3==1 && t6==1 && t9==1){
      tNt=3
      denotate=1
    }
    else if(t1==1 && t5==1 && t9==1){
      cross=1
      denotate=1
    }
    else if(t3==1 && t5==1 && t7==1){
      cross=2
      denotate=1
    }
    else if( t1 > 0 && t2 > 0 && t3 > 0 && t4 > 0 && t5 > 0 && t6 > 0 && t7 > 0 && t8 > 0 && t9 > 0){
      denotate=3
    }
  }
}

//this code actually end the game, declare winner and draw lines
function finish(){
  if(bomb==1){
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 40)
    letterX.setAttribute("y1", 200)
    letterX.setAttribute("x2", 960)
    letterX.setAttribute("y2", 200)
    letterX.setAttribute("stroke", "#4c5660")
    letterX.setAttribute("stroke-width", 20)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)
  }
  if(bomb==2){
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 40)
    letterX.setAttribute("y1", 500)
    letterX.setAttribute("x2", 960)
    letterX.setAttribute("y2", 500)
    letterX.setAttribute("stroke", "#4c5660")
    letterX.setAttribute("stroke-width", 20)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)
  }
  if(bomb==3){
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 40)
    letterX.setAttribute("y1", 800)
    letterX.setAttribute("x2", 960)
    letterX.setAttribute("y2", 800)
    letterX.setAttribute("stroke", "#4c5660")
    letterX.setAttribute("stroke-width", 20)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)
  }
  if(tNt==1){
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 200)
    letterX.setAttribute("y1", 40)
    letterX.setAttribute("x2", 200)
    letterX.setAttribute("y2", 960)
    letterX.setAttribute("stroke", "#4c5660")
    letterX.setAttribute("stroke-width", 20)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)
  }
  if(tNt==2){
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 500)
    letterX.setAttribute("y1", 40)
    letterX.setAttribute("x2", 500)
    letterX.setAttribute("y2", 960)
    letterX.setAttribute("stroke", "#4c5660")
    letterX.setAttribute("stroke-width", 20)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)
  }
  if(tNt==3){
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 800)
    letterX.setAttribute("y1", 40)
    letterX.setAttribute("x2", 800)
    letterX.setAttribute("y2", 960)
    letterX.setAttribute("stroke", "#4c5660")
    letterX.setAttribute("stroke-width", 20)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)
  }
  if(cross==1){
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 40)
    letterX.setAttribute("y1", 40)
    letterX.setAttribute("x2", 960)
    letterX.setAttribute("y2", 960)
    letterX.setAttribute("stroke", "#4c5660")
    letterX.setAttribute("stroke-width", 20)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)
  }
  if(cross==2){
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 960)
    letterX.setAttribute("y1", 40)
    letterX.setAttribute("x2", 40)
    letterX.setAttribute("y2", 960)
    letterX.setAttribute("stroke", "#4c5660")
    letterX.setAttribute("stroke-width", 20)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)
  }
  //this freeze the board and declare winner or tie
  if(denotate==1){
    document.getElementById("turn").innerHTML = "~ Player 1 Win ! ~";
    t1=-1
    t2=-1
    t3=-1
    t4=-1
    t5=-1
    t6=-1
    t7=-1
    t8=-1
    t9=-1
  }
  else if(denotate==2){
    document.getElementById("turn").innerHTML = "~ Player 2 Win ! ~";
    t1=-1
    t2=-1
    t3=-1
    t4=-1
    t5=-1
    t6=-1
    t7=-1
    t8=-1
    t9=-1
  }
  else if(denotate==3){
    document.getElementById("turn").innerHTML = "~ Tie! ~";
  }
}

//finally we begin with the game, this state what shape will appear
var canvas = document.getElementById("my-canvas")
// left top square
var t1=0
function box1(){
  if(t1==0){
    if(x==1){
      //this is the circle
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 200)
      circle.setAttribute("cy", 200)
      circle.setAttribute("r", 100)
      circle.setAttribute("stroke", "blue")
      circle.setAttribute("stroke-width", 15)
      circle.setAttribute("fill-opacity", 0)
      canvas.appendChild(circle)
      x=2
      t1=1
    }
    else{
      //this is the letter X
      var letterX = document.createElementNS(namespace, "line")
      letterX.setAttribute("x1", 100)
      letterX.setAttribute("y1", 300)
      letterX.setAttribute("x2", 300)
      letterX.setAttribute("y2", 100)
      letterX.setAttribute("stroke", "red")
      letterX.setAttribute("stroke-width", 15)
      letterX.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterX)
      var letterT = document.createElementNS(namespace, "line")
      letterT.setAttribute("x1", 100)
      letterT.setAttribute("y1", 100)
      letterT.setAttribute("x2", 300)
      letterT.setAttribute("y2", 300)
      letterT.setAttribute("stroke", "red")
      letterT.setAttribute("stroke-width", 15)
      letterT.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterT)
      x=1
      t1=2
    }
  }
}

// top middle square
var t2=0
function box2(){
  if(t2==0){
    if(x==1){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 500)
      circle.setAttribute("cy", 200)
      circle.setAttribute("r", 100)
      circle.setAttribute("stroke", "blue")
      circle.setAttribute("stroke-width", 15)
      circle.setAttribute("fill-opacity", 0)
      canvas.appendChild(circle)
      x=2
      t2=1
    }
    else{
      var letterX = document.createElementNS(namespace, "line")
      letterX.setAttribute("x1", 400)
      letterX.setAttribute("y1", 300)
      letterX.setAttribute("x2", 600)
      letterX.setAttribute("y2", 100)
      letterX.setAttribute("stroke", "red")
      letterX.setAttribute("stroke-width", 15)
      letterX.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterX)
      var letterT = document.createElementNS(namespace, "line")
      letterT.setAttribute("x1", 400)
      letterT.setAttribute("y1", 100)
      letterT.setAttribute("x2", 600)
      letterT.setAttribute("y2", 300)
      letterT.setAttribute("stroke", "red")
      letterT.setAttribute("stroke-width", 15)
      letterT.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterT)
      x=1
      t2=2
    }
  }
}
// right top square
var t3=0
function box3(){
  if(t3==0){
    if(x==1){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 800)
      circle.setAttribute("cy", 200)
      circle.setAttribute("r", 100)
      circle.setAttribute("stroke", "blue")
      circle.setAttribute("stroke-width", 15)
      circle.setAttribute("fill-opacity", 0)
      canvas.appendChild(circle)
      x=2
      t3=1
    }
    else{
      var letterX = document.createElementNS(namespace, "line")
      letterX.setAttribute("x1", 700)
      letterX.setAttribute("y1", 300)
      letterX.setAttribute("x2", 900)
      letterX.setAttribute("y2", 100)
      letterX.setAttribute("stroke", "red")
      letterX.setAttribute("stroke-width", 15)
      letterX.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterX)
      var letterT = document.createElementNS(namespace, "line")
      letterT.setAttribute("x1", 700)
      letterT.setAttribute("y1", 100)
      letterT.setAttribute("x2", 900)
      letterT.setAttribute("y2", 300)
      letterT.setAttribute("stroke", "red")
      letterT.setAttribute("stroke-width", 15)
      letterT.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterT)
      x=1
      t3=2
    }
  }
}

// left middle square
var t4=0
function box4(){
  if(t4==0){
    if(x==1){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 200)
      circle.setAttribute("cy", 500)
      circle.setAttribute("r", 100)
      circle.setAttribute("stroke", "blue")
      circle.setAttribute("stroke-width", 15)
      circle.setAttribute("fill-opacity", 0)
      canvas.appendChild(circle)
      x=2
      t4=1
    }
    else{
      var letterX = document.createElementNS(namespace, "line")
      letterX.setAttribute("x1", 100)
      letterX.setAttribute("y1", 600)
      letterX.setAttribute("x2", 300)
      letterX.setAttribute("y2", 400)
      letterX.setAttribute("stroke", "red")
      letterX.setAttribute("stroke-width", 15)
      letterX.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterX)
      var letterT = document.createElementNS(namespace, "line")
      letterT.setAttribute("x1", 100)
      letterT.setAttribute("y1", 400)
      letterT.setAttribute("x2", 300)
      letterT.setAttribute("y2", 600)
      letterT.setAttribute("stroke", "red")
      letterT.setAttribute("stroke-width", 15)
      letterT.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterT)
      x=1
      t4=2
    }
  }
}

// middle middle square
var t5=0
function box5(){
  if(t5==0){
    if(x==1){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 500)
      circle.setAttribute("cy", 500)
      circle.setAttribute("r", 100)
      circle.setAttribute("stroke", "blue")
      circle.setAttribute("stroke-width", 15)
      circle.setAttribute("fill-opacity", 0)
      canvas.appendChild(circle)
      x=2
      t5=1
    }
    else{
      var letterX = document.createElementNS(namespace, "line")
      letterX.setAttribute("x1", 400)
      letterX.setAttribute("y1", 600)
      letterX.setAttribute("x2", 600)
      letterX.setAttribute("y2", 400)
      letterX.setAttribute("stroke", "red")
      letterX.setAttribute("stroke-width", 15)
      letterX.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterX)
      var letterT = document.createElementNS(namespace, "line")
      letterT.setAttribute("x1", 400)
      letterT.setAttribute("y1", 400)
      letterT.setAttribute("x2", 600)
      letterT.setAttribute("y2", 600)
      letterT.setAttribute("stroke", "red")
      letterT.setAttribute("stroke-width", 15)
      letterT.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterT)
      x=1
      t5=2
    }
  }
}

// right middle square
var t6=0
function box6(){
  if(t6==0){
    if(x==1){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 800)
      circle.setAttribute("cy", 500)
      circle.setAttribute("r", 100)
      circle.setAttribute("stroke", "blue")
      circle.setAttribute("stroke-width", 15)
      circle.setAttribute("fill-opacity", 0)
      canvas.appendChild(circle)
      x=2
      t6=1
    }
    else{
      var letterX = document.createElementNS(namespace, "line")
      letterX.setAttribute("x1", 700)
      letterX.setAttribute("y1", 600)
      letterX.setAttribute("x2", 900)
      letterX.setAttribute("y2", 400)
      letterX.setAttribute("stroke", "red")
      letterX.setAttribute("stroke-width", 15)
      letterX.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterX)
      var letterT = document.createElementNS(namespace, "line")
      letterT.setAttribute("x1", 700)
      letterT.setAttribute("y1", 400)
      letterT.setAttribute("x2", 900)
      letterT.setAttribute("y2", 600)
      letterT.setAttribute("stroke", "red")
      letterT.setAttribute("stroke-width", 15)
      letterT.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterT)
      x=1
      t6=2
    }
  }
}

// left bottom square
var t7=0
function box7(){
  if(t7==0){
    if(x==1){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 200)
      circle.setAttribute("cy", 800)
      circle.setAttribute("r", 100)
      circle.setAttribute("stroke", "blue")
      circle.setAttribute("stroke-width", 15)
      circle.setAttribute("fill-opacity", 0)
      canvas.appendChild(circle)
      x=2
      t7=1
    }
    else{
      var letterX = document.createElementNS(namespace, "line")
      letterX.setAttribute("x1", 100)
      letterX.setAttribute("y1", 900)
      letterX.setAttribute("x2", 300)
      letterX.setAttribute("y2", 700)
      letterX.setAttribute("stroke", "red")
      letterX.setAttribute("stroke-width", 15)
      letterX.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterX)
      var letterT = document.createElementNS(namespace, "line")
      letterT.setAttribute("x1", 100)
      letterT.setAttribute("y1", 700)
      letterT.setAttribute("x2", 300)
      letterT.setAttribute("y2", 900)
      letterT.setAttribute("stroke", "red")
      letterT.setAttribute("stroke-width", 15)
      letterT.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterT)
      x=1
      t7=2
    }
  }
}

// middle bottom square
var t8=0
function box8(){
  if(t8==0){
    if(x==1){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 500)
      circle.setAttribute("cy", 800)
      circle.setAttribute("r", 100)
      circle.setAttribute("stroke", "blue")
      circle.setAttribute("stroke-width", 15)
      circle.setAttribute("fill-opacity", 0)
      canvas.appendChild(circle)
      x=2
      t8=1
    }
    else{
      var letterX = document.createElementNS(namespace, "line")
      letterX.setAttribute("x1", 400)
      letterX.setAttribute("y1", 900)
      letterX.setAttribute("x2", 600)
      letterX.setAttribute("y2", 700)
      letterX.setAttribute("stroke", "red")
      letterX.setAttribute("stroke-width", 15)
      letterX.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterX)
      var letterT = document.createElementNS(namespace, "line")
      letterT.setAttribute("x1", 400)
      letterT.setAttribute("y1", 700)
      letterT.setAttribute("x2", 600)
      letterT.setAttribute("y2", 900)
      letterT.setAttribute("stroke", "red")
      letterT.setAttribute("stroke-width", 15)
      letterT.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterT)
      x=1
      t8=2
    }
  }
}

// right bottom square
var t9=0
function box9(){
  if(t9==0){
    if(x==1){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", 800)
      circle.setAttribute("cy", 800)
      circle.setAttribute("r", 100)
      circle.setAttribute("stroke", "blue")
      circle.setAttribute("stroke-width", 15)
      circle.setAttribute("fill-opacity", 0)
      canvas.appendChild(circle)
      x=2
      t9=1
    }
    else{
      var letterX = document.createElementNS(namespace, "line")
      letterX.setAttribute("x1", 700)
      letterX.setAttribute("y1", 900)
      letterX.setAttribute("x2", 900)
      letterX.setAttribute("y2", 700)
      letterX.setAttribute("stroke", "red")
      letterX.setAttribute("stroke-width", 15)
      letterX.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterX)
      var letterT = document.createElementNS(namespace, "line")
      letterT.setAttribute("x1", 700)
      letterT.setAttribute("y1", 700)
      letterT.setAttribute("x2", 900)
      letterT.setAttribute("y2", 900)
      letterT.setAttribute("stroke", "red")
      letterT.setAttribute("stroke-width", 15)
      letterT.setAttribute("stroke-linecap", "round")
      canvas.appendChild(letterT)
      x=1
      t9=2
    }
  }
}
