var namespace = "http://www.w3.org/2000/svg"

var canvas = document.getElementById("my-canvas")

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
    var letterX = document.createElementNS(namespace, "circle")
    letterX.setAttribute("x1", 150)
    letterX.setAttribute("y1", 150)
    letterX.setAttribute("r", 100)
    letterX.setAttribute("stroke", "blue")
    letterX.setAttribute("stroke-width", 15)
    letterX.setAttribute("fill-opacity", 0)
    canvas.appendChild(letterX)
  }

}
