var namespace = "http://www.w3.org/2000/svg"

var x=1

document.addEventListener('click', player);

function player(){
if(x == 1 )
{
  document.getElementById("turn").innerHTML = "Player 1's Turn";
}else{
  document.getElementById("turn").innerHTML = "Player 2's Turn";
}
}



var canvas = document.getElementById("my-canvas")
// left top square
var t1=0
function box1() {
  if(t1==0)
  {
  if(x==1)
  {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 150)
  circle.setAttribute("cy", 150)
  circle.setAttribute("r", 100)
  circle.setAttribute("stroke", "blue")
  circle.setAttribute("stroke-width", 15)
  circle.setAttribute("fill-opacity", 0)
  canvas.appendChild(circle)
  x=2
  }
  else{
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 50)
    letterX.setAttribute("y1", 250)
    letterX.setAttribute("x2", 250)
    letterX.setAttribute("y2", 50)
    letterX.setAttribute("stroke", "red")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)

    var letterT = document.createElementNS(namespace, "line")
    letterT.setAttribute("x1", 50)
    letterT.setAttribute("y1", 50)
    letterT.setAttribute("x2", 250)
    letterT.setAttribute("y2", 250)
    letterT.setAttribute("stroke", "red")
    letterT.setAttribute("stroke-width", 15)
    letterT.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterT)
    x=1
  }
  document.getElementById("square1").className = "block";
  t1=1
}
}

// top middle square
var t2=0

function box2() {
  if(t2==0)
  {
  if(x==1)
  {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 450)
  circle.setAttribute("cy", 150)
  circle.setAttribute("r", 100)
  circle.setAttribute("stroke", "blue")
  circle.setAttribute("stroke-width", 15)
  circle.setAttribute("fill-opacity", 0)
  canvas.appendChild(circle)
  x=2
  }
  else{
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 350)
    letterX.setAttribute("y1", 250)
    letterX.setAttribute("x2", 550)
    letterX.setAttribute("y2", 50)
    letterX.setAttribute("stroke", "red")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)

    var letterT = document.createElementNS(namespace, "line")
    letterT.setAttribute("x1", 350)
    letterT.setAttribute("y1", 50)
    letterT.setAttribute("x2", 550)
    letterT.setAttribute("y2", 250)
    letterT.setAttribute("stroke", "red")
    letterT.setAttribute("stroke-width", 15)
    letterT.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterT)
    x=1
  }
  document.getElementById("square2").className = "block";
  t2=1
}
}
// right top square
var t3=0
function box3() {
  if(t3==0)
  {
  if(x==1)
  {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 750)
  circle.setAttribute("cy", 150)
  circle.setAttribute("r", 100)
  circle.setAttribute("stroke", "blue")
  circle.setAttribute("stroke-width", 15)
  circle.setAttribute("fill-opacity", 0)
  canvas.appendChild(circle)
  x=2
  }
  else{
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 650)
    letterX.setAttribute("y1", 250)
    letterX.setAttribute("x2", 850)
    letterX.setAttribute("y2", 50)
    letterX.setAttribute("stroke", "red")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)

    var letterT = document.createElementNS(namespace, "line")
    letterT.setAttribute("x1", 650)
    letterT.setAttribute("y1", 50)
    letterT.setAttribute("x2", 850)
    letterT.setAttribute("y2", 250)
    letterT.setAttribute("stroke", "red")
    letterT.setAttribute("stroke-width", 15)
    letterT.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterT)
    x=1
  }
  document.getElementById("square3").className = "block";
  t3=1
}
}
// left middle square
var t4=0
function box4() {
  if(t4==0)
  {
  if(x==1)
  {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 150)
  circle.setAttribute("cy", 450)
  circle.setAttribute("r", 100)
  circle.setAttribute("stroke", "blue")
  circle.setAttribute("stroke-width", 15)
  circle.setAttribute("fill-opacity", 0)
  canvas.appendChild(circle)
  x=2
  }
  else{
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 50)
    letterX.setAttribute("y1", 550)
    letterX.setAttribute("x2", 250)
    letterX.setAttribute("y2", 350)
    letterX.setAttribute("stroke", "red")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)

    var letterT = document.createElementNS(namespace, "line")
    letterT.setAttribute("x1", 50)
    letterT.setAttribute("y1", 350)
    letterT.setAttribute("x2", 250)
    letterT.setAttribute("y2", 550)
    letterT.setAttribute("stroke", "red")
    letterT.setAttribute("stroke-width", 15)
    letterT.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterT)
    x=1
  }
  document.getElementById("square4").className = "block";
  t4=1
}
}

// middle middle square
var t5=0
function box5() {
  if(t5==0)
  {
  if(x==1)
  {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 450)
  circle.setAttribute("cy", 450)
  circle.setAttribute("r", 100)
  circle.setAttribute("stroke", "blue")
  circle.setAttribute("stroke-width", 15)
  circle.setAttribute("fill-opacity", 0)
  canvas.appendChild(circle)
  x=2
  }
  else{
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 350)
    letterX.setAttribute("y1", 550)
    letterX.setAttribute("x2", 550)
    letterX.setAttribute("y2", 350)
    letterX.setAttribute("stroke", "red")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)

    var letterT = document.createElementNS(namespace, "line")
    letterT.setAttribute("x1", 350)
    letterT.setAttribute("y1", 350)
    letterT.setAttribute("x2", 550)
    letterT.setAttribute("y2", 550)
    letterT.setAttribute("stroke", "red")
    letterT.setAttribute("stroke-width", 15)
    letterT.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterT)
    x=1
  }
  document.getElementById("square5").className = "block";
  t5=1
}
}

// right middle square
var t6=0
function box6() {
  if(t6==0)
  {
  if(x==1)
  {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 750)
  circle.setAttribute("cy", 450)
  circle.setAttribute("r", 100)
  circle.setAttribute("stroke", "blue")
  circle.setAttribute("stroke-width", 15)
  circle.setAttribute("fill-opacity", 0)
  canvas.appendChild(circle)
  x=2
  }
  else{
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 650)
    letterX.setAttribute("y1", 550)
    letterX.setAttribute("x2", 850)
    letterX.setAttribute("y2", 350)
    letterX.setAttribute("stroke", "red")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)

    var letterT = document.createElementNS(namespace, "line")
    letterT.setAttribute("x1", 650)
    letterT.setAttribute("y1", 350)
    letterT.setAttribute("x2", 850)
    letterT.setAttribute("y2", 550)
    letterT.setAttribute("stroke", "red")
    letterT.setAttribute("stroke-width", 15)
    letterT.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterT)
    x=1
  }
  document.getElementById("square6").className = "block";
  t6=1
}
}

// left bottom square
var t7=0
function box7() {
  if(t7==0)
  {
  if(x==1)
  {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 150)
  circle.setAttribute("cy", 750)
  circle.setAttribute("r", 100)
  circle.setAttribute("stroke", "blue")
  circle.setAttribute("stroke-width", 15)
  circle.setAttribute("fill-opacity", 0)
  canvas.appendChild(circle)
  x=2
  }
  else{
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 50)
    letterX.setAttribute("y1", 850)
    letterX.setAttribute("x2", 250)
    letterX.setAttribute("y2", 650)
    letterX.setAttribute("stroke", "red")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)

    var letterT = document.createElementNS(namespace, "line")
    letterT.setAttribute("x1", 50)
    letterT.setAttribute("y1", 650)
    letterT.setAttribute("x2", 250)
    letterT.setAttribute("y2", 850)
    letterT.setAttribute("stroke", "red")
    letterT.setAttribute("stroke-width", 15)
    letterT.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterT)
    x=1
  }
  document.getElementById("square7").className = "block";
  t7=1
}
}

// middle bottom square
var t8=0
function box8() {
  if(t8==0)
  {
  if(x==1)
  {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 450)
  circle.setAttribute("cy", 750)
  circle.setAttribute("r", 100)
  circle.setAttribute("stroke", "blue")
  circle.setAttribute("stroke-width", 15)
  circle.setAttribute("fill-opacity", 0)
  canvas.appendChild(circle)
  x=2
  }
  else{
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 350)
    letterX.setAttribute("y1", 850)
    letterX.setAttribute("x2", 550)
    letterX.setAttribute("y2", 650)
    letterX.setAttribute("stroke", "red")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)

    var letterT = document.createElementNS(namespace, "line")
    letterT.setAttribute("x1", 350)
    letterT.setAttribute("y1", 650)
    letterT.setAttribute("x2", 550)
    letterT.setAttribute("y2", 850)
    letterT.setAttribute("stroke", "red")
    letterT.setAttribute("stroke-width", 15)
    letterT.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterT)
    x=1
  }
  document.getElementById("square8").className = "block";
  t8=1
}
}

// right bottom square
var t9=0
function box9() {
  if(t9==0)
  {
  if(x==1)
  {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 750)
  circle.setAttribute("cy", 750)
  circle.setAttribute("r", 100)
  circle.setAttribute("stroke", "blue")
  circle.setAttribute("stroke-width", 15)
  circle.setAttribute("fill-opacity", 0)
  canvas.appendChild(circle)
  x=2
  }
  else{
    var letterX = document.createElementNS(namespace, "line")
    letterX.setAttribute("x1", 650)
    letterX.setAttribute("y1", 850)
    letterX.setAttribute("x2", 850)
    letterX.setAttribute("y2", 650)
    letterX.setAttribute("stroke", "red")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterX)

    var letterT = document.createElementNS(namespace, "line")
    letterT.setAttribute("x1", 650)
    letterT.setAttribute("y1", 650)
    letterT.setAttribute("x2", 850)
    letterT.setAttribute("y2", 850)
    letterT.setAttribute("stroke", "red")
    letterT.setAttribute("stroke-width", 15)
    letterT.setAttribute("stroke-linecap", "round")
    canvas.appendChild(letterT)
    x=1
  }
  document.getElementById("square9").className = "block";
  t9=1
}
}
