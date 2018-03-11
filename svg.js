var r = 25
var frame = null;
var pic = document.getElementById("svg");
var btn = document.getElementById("clear");

var circle = function(e){
    clearInterval(frame);
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX + "");
    c.setAttribute("cy", e.offsetY + "");
    c.setAttribute("r", r + "");
    c.setAttribute("xplus", 1);
    c.setAttribute("yplus", 1);
    c.setAttribute("fill", "black");
    c.setAttribute("stroke","black");
    pic.appendChild(c);    
}

var bounce = function(e){
    circle(e);
    frame = setInterval(bouncehelper, 10);
}
var bouncehelper= function(){
    var x,y,xplus,yplus;
    for( i = 0; i < pic.children.length; i++){
	c = pic.children[i];
	x = Number(c.getAttribute("cx"));
	y = Number(c.getAttribute("cy"));
	xplus = Number(c.getAttribute("xplus"));
	yplus = Number(c.getAttribute("yplus"));
	if (x <= 25){
	    c.setAttribute("xplus", 1);
	}
	if (x >= 475){
	    c.setAttribute("xplus", 0);
	}
	if (y <= 25){
	    c.setAttribute("yplus", 1);
	}
	if (y >= 480){
	    c.setAttribute("yplus", 0);
	}
	if (xplus == 1){
	    c.setAttribute("cx", x + 5);
	}
	else{
	    c.setAttribute("cx", x - 5);
	}
	if (yplus == 1){
	    c.setAttribute("cy", y + 5);
	}
	else{
	    c.setAttribute("cy", y - 5);
	}
    }
}

var clear = function() {
    while(pic.firstChild){
	pic.removeChild(pic.firstChild);
    }
    clearInterval(frame);
}

pic.addEventListener("click",bounce);
btn.addEventListener("click",clear);
