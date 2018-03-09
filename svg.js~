var x, y;
var pic = document.getElementById("svg");
var btn = document.getElementById("clear");

var draw = function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx",e.offsetX + "");
    c.setAttribute("cy",e.offsetY + "");
    c.setAttribute("r", "10");
    c.setAttribute("fill", "black");
    c.setAttribute("stroke","black");
    pic.appendChild(c);
    if(x == null){
	x = e.offsetX;
	y = e.offsetY;
    }
    else{
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1", x + "");
	l.setAttribute("y1", y + "");
	l.setAttribute("x2", e.offsetX + "");
	l.setAttribute("y2", e.offsetY + "");
	l.setAttribute("stroke", "#000000");
	l.setAttribute("stroke-width", 2);
	x = e.offsetX;
	y = e.offsetY;
	pic.appendChild(l);
    }
}

var clear = function() {
    while (pic.hasChildNodes()){
	pic.removeChild(pic.firstChild);
    }
    x = null;
    y = null;
}

pic.addEventListener("click",draw);
btn.addEventListener("click",clear);
