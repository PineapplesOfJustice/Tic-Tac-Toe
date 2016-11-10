var namespace = "http://www.w3.org/2000/svg"

var canvas = document.getElementById("my-canvas")

var x=2
function box1() {
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
    x=x-1
  }

}
