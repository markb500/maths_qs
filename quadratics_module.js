var sumq = "", suma = "", a, b, c, x1, x2;
function quadratics() {
//Produces quadratic expression of form x^2 + bx + c = 0 to be solved by factorisation.
//x^2 always has coefficient of 1 and solutions are always integers.
  document.getElementById("myCanvas");
  myCanvas.height = "0.5";
  myCanvas.width = "0.5";
  myCanvas.style = "border: none;"; 
  document.getElementById("myCanvas2");
  myCanvas2.height = "0.5";
  myCanvas2.width = "0.5";
  myCanvas2.style.visibility = "hidden";
  if (SolnWin) {      //Prior to 1st open of SolnWin, the .closed test is null
      if (!SolnWin.closed) {  //Once SolnWin has been opened, SolnWin is true whether open or closed so need this extra test
          SolnWin.document.getElementById("myCanvas3");
          SolnWin.myCanvas3.height = "0.5";
          SolnWin.myCanvas3.width = "0.5";
      }
  }
  sumq = "";
  suma = "";
  document.getElementById("a").innerHTML = "";
  // document.getElementById("noteslink").style.visibility="visible";
  // document.getElementById("noteslink").onclick = function() {
  //     window.open("images/20200504-MathsBook5AlgebraicOpsv1_3-APO.pdf#page=15", "_blank")
  // }
  do {
    a = 1;
    b = rndgen(-30, 30, 0, 1, -1);  //int -30 to 30
    c = rndgen(-30, 30, 0, 1, -1);  //int -30 to 30
    if(b**2 - 4 * a * c >= 0) {                           //avoid sqrt of -ve
      x1 = (-b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
      x2 = (-b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
    } else {
      x1 = 0;
      x2 = 0;
    }
  }
  while(!Number.isInteger(x1) ||
        !Number.isInteger(x2) ||
        x1 * x2 === 0 ||
        Math.abs(x1) === 1 ||
        Math.abs(x2) === 1)
  sumq += "Factorise the following and find the values of x.<br />"
  if (b === 0) {
    sumq += "$$x^2" + cfchk(c, "", 1, 0) + "=0$$";
  } else {
    sumq += "$$x^2" + cfchk(b, "x", 1, 0) + cfchk(c, "", 1, 0) + "=0$$<br />"
  }
          
  suma += "$$\\begin{aligned}(x" + cfchk(-1 * x1, "", 1, 0) + ")(x" + cfchk(-1 * x2, "", 1, 0) + 
          ")&=0 \\\\[15pt] (x" + cfchk(-1 * x1, "", 1, 0) + ")&=0 \\ \\ \\ \\ so\\  x=" + x1;
  if (x1 !== x2) {
    suma += "  \\\\[5pt] or\\ (x" + cfchk(-1 * x2, "", 1, 0) + ")&=0 \\ \\ \\ \\ so\\  x=" + x2 + "\\end{aligned}$$";
  } else {
    suma += "\\end{aligned}$$";
  }
  document.getElementById("q").innerHTML = sumq;
  document.getElementById("btnSoln").style.visibility="visible";
}