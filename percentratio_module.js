var prevsum = 0, prev2sum = 0, sumq, suma, num1, num2, pct, rat1, rat2, rat3;
var ratunits = [" m", " N", " kg", "£", "\\ m", "\\ N", "\\ kg", "£"], iratunit;
function percentratio() {
    //Randomly selects from 6 questions (5 percent & 1 ratio). Units randomly changed in ration question.
    var sum, comdenom;
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
    //     window.open("images/20200504-MathsBook4HCFLCMFactv1_5-APO.pdf#page=3", "_blank")
    // }
    do {
        sum = rndgen(1, 6, 0, 1, -1);
    } while(sum === prevsum || sum === prev2sum)
    prev2sum = prevsum;
    prevsum = sum;
    switch(sum) {
        case 1://Without using a calculator, express num1 as a percentage of num2 to 1 dp.
            // document.getElementById("noteslink").onclick = function() {
            //     window.open("images/20200427-MathsBook1BasicNumv1_3-APO.pdf#page=50", "_blank")
            // }
            num1 =  rndgen(1, 5, 1, 0.1, -1);  //1.1 to 5.1 1dp
            num2 =  rndgen(num1 + 0.4, 8, 1, 0.1, -1);  //(num1 + 0.4) to 8 1dp
            sumq += "Without using a calculator, express " + num1 + " as a percentage of " + num2 + 
                        ", giving your answer rounded to 1 decimal place.";
            suma += "$$\\frac{" + num1 + "}{" + num2 + "}\\times 100=" + 
                        dp((num1 / num2) * 100, 1, 1) + "\\ \\%\\ (1\\ dp)$$";
            break;
        case 2://Calculate, without using a calculator, p % of num1, to 1 dp."""
            // document.getElementById("noteslink").onclick = function() {
            //     window.open("images/20200427-MathsBook1BasicNumv1_3-APO.pdf#page=50", "_blank")
            // }
            do {
                pct = rndgen(3, 99, 0, 1, -1);
            } while(pct === 10 || pct === 25 || pct === 50 || pct === 75)
            num1 = rndgen(16, 51, 0, 1, -1);
            sumq += "Calculate, without using a calculator, " + pct + " % of " + num1 + 
                        ", rounding your answer to 1 decimal place.";
            suma += "$$\\frac{" + pct + "}{100}\\times" + num1 + "=" + 
                        dp((pct / 100) * num1, 1, 1) + "\\ (1\\ dp)$$";
            break;
        case 3://Without using a calculator, express p % as a proper fraction in its simplest form."""
            // document.getElementById("noteslink").onclick = function() {
            //     window.open("images/20200427-MathsBook1BasicNumv1_3-APO.pdf#page=50", "_blank")
            // }
            pct = rndgen(3, 99, 0, 1, -1);
            comdenom = gcd2(pct, 100);
            sumq += "Without using a calculator, express " + pct + " % as a proper fraction in its simplest form.";
            if(comdenom !== 1) {
                suma += "$$\\frac{" + pct + "}{100}=\\frac{" + (pct / comdenom) + "}{" + (100 / comdenom) + "}$$";
            } else {
                suma += "$$\\frac{" + pct + "}{100}$$";
            }
            break;
        case 4://Without using a calculator, convert p % to a decimal."""
            // document.getElementById("noteslink").onclick = function() {
            //     window.open("images/20200427-MathsBook1BasicNumv1_3-APO.pdf#page=50", "_blank")
            // }
            pct = rndgen(3, 99, 1, 0.1, -1);
            sumq += "Without using a calculator, convert " + pct + " % to a decimal.";
            suma += "$$\\frac{" + pct + "}{100}=" + dp(pct / 100, 3, -1) + "$$"; 
            break;
        case 5://Without using a calculator, convert Round(p / 100, 4) to a percentage."""
            // document.getElementById("noteslink").onclick = function() {
            //     window.open("images/20200427-MathsBook1BasicNumv1_3-APO.pdf#page=50", "_blank")
            // }
            pct = rndgen(0.5, 99, 2, 0.01, -1);
            sumq += "Without using a calculator, convert " + 
                        dp(pct / 100, 4, -1) + " to a percentage.";
            suma += "$$" + dp(pct / 100, 4, -1) + 
                        "\\times 100=" + pct + "\\ \\%$$";   
            break;
        case 6://Without using a calculator, divide num1 unit(iratunit) in the ratio rat1:rat2:rat3.
            // document.getElementById("noteslink").onclick = function() {
            //     window.open("images/20200427-MathsBook1BasicNumv1_3-APO.pdf#page=52", "_blank")
            // }
            do {
                num1 = rndgen(48, 91, 0, 1, -1);
                rat1 = rndgen(1, 10, 0, 1, -1);
                rat2 = rndgen(1, 10, 0, 1, -1);
                rat3 = rndgen(1, 10, 0, 1, -1);
            } while(num1 % (rat1 + rat2 + rat3) !== 0 || num1 === (rat1 + rat2 + rat3) || rat1 === rat2 || rat1 === rat3 || rat2 === rat3)
            iratunit = rndgen(0, 3, 0, 1, -1);
            if(iratunit < 3) {
                sumq += "Without using a calculator, divide " + num1 + ratunits[iratunit] + 
                            " in the ratio " + rat1 + ":" + rat2 + ":" + rat3 + ".";
                suma += "$$" + rat1 + "+" + rat2 + "+" + rat3 + "=" + (rat1 + rat2 + rat3) + "$$";
                // suma += "$$" + dp(10.32, 0, -1) + 10.32.toFixed() + "$$";
                suma += "$$" + num1 + "\\times \\frac{" + rat1 + "}{" + (rat1 + rat2 + rat3) + "}=" + 
                            dp(num1 * (rat1 / (rat1 + rat2 + rat3)), 0, -1) + ratunits[iratunit + 4] + "$$";
                suma += "$$" + num1 + "\\times \\frac{" + rat2 + "}{" + (rat1 + rat2 + rat3) + "}=" + 
                            dp(num1 * (rat2 / (rat1 + rat2 + rat3)), 0, -1) + ratunits[iratunit + 4] + "$$";
                suma += "$$" + num1 + "\\times \\frac{" + rat3 + "}{" + (rat1 + rat2 + rat3) + "}=" + 
                            dp(num1 * (rat3 / (rat1 + rat2 + rat3)), 0, -1) + ratunits[iratunit + 4] + "$$";
            } else {
                sumq += "Without using a calculator, divide " + ratunits[iratunit] + num1.toFixed(2) + 
                            " in the ratio " + rat1 + ":" + rat2 + ":" + rat3 + ".";
                suma += "$$" + rat1 + "+" + rat2 + "+" + rat3 + "=" + (rat1 + rat2 + rat3) + "$$";
                suma += "$$" + num1 + "\\times \\frac{" + rat1 + "}{" + (rat1 + rat2 + rat3) + "}=" + ratunits[iratunit + 4] + 
                            dp(num1 * (rat1 / (rat1 + rat2 + rat3)), 2, 2) + "$$";
                suma += "$$" + num1 + "\\times \\frac{" + rat2 + "}{" + (rat1 + rat2 + rat3) + "}=" + ratunits[iratunit + 4] + 
                            dp(num1 * (rat2 / (rat1 + rat2 + rat3)), 2, 2) + "$$";
                suma += "$$" + num1 + "\\times \\frac{" + rat3 + "}{" + (rat1 + rat2 + rat3) + "}=" + ratunits[iratunit + 4] + 
                            dp(num1 * (rat3 / (rat1 + rat2 + rat3)), 2, 2) + "$$";
            }
            break;
    }
    document.getElementById("q").innerHTML = sumq;
    document.getElementById("btnSoln").style.visibility="visible";
}