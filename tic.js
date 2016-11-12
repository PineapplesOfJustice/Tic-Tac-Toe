var namespace = "http://www.w3.org/2000/svg"

var x=1
var bomb=0
var denotate=0
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
  document.getElementById("square1").className = "block";
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
  document.getElementById("square2").className = "block";
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
  document.getElementById("square3").className = "block";
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
  document.getElementById("square4").className = "block";
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
  document.getElementById("square5").className = "block";
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
  document.getElementById("square6").className = "block";
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
  document.getElementById("square7").className = "block";
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
  document.getElementById("square8").className = "block";
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
  document.getElementById("square9").className = "block";
}
}
