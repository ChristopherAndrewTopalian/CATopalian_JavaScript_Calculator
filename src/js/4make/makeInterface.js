// makeInterface.js

function makeInterface()
{
    if (ge("mainDiv"))
    {
        ge("mainDiv").remove();
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = "mainDiv";
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 100 + "px";
    mainDiv.style.top = 60 + "px";
    mainDiv.style.height = 374 + "px";
    mainDiv.style.borderStyle = "solid";
    mainDiv.style.borderWidth = 2 + "px";
    mainDiv.style.borderRadius = 4 + "px";
    mainDiv.style.padding = 8 + "px";
    ba(mainDiv);

    //-//

    let theTitle = ce("div");
    theTitle.style.position = "inherited";
    theTitle.innerHTML = "CATopalian Calculator"
    theTitle.style.fontSize = 25 + "px";
    theTitle.style.fontWeight = "bold";
    theTitle.style.display = "flex";
    theTitle.style.flexDirection = "column";
    theTitle.style.alignItems = "center";
    theTitle.style.margin = "auto";
    theTitle.style.paddingBottom = 7 + "px";
    mainDiv.append(theTitle);

    //-//

    let theScreen = ce("div");
    theScreen.id = "theScreen";
    theScreen.className = "theScreenStyle";
    theScreen.contentEditable = false;
    theScreen.innerHTML = 0;
    mainDiv.append(theScreen);

    //-//

    let buttonClear = ce("button");
    buttonClear.style.position = "absolute";
    buttonClear.style.top = 55 + "px";
    buttonClear.style.left = -60 +"px";
    buttonClear.innerHTML = "C";
    buttonClear.className = "buttonSymbols";
    buttonClear.onclick = function()
    {
        calculationArray = [];
        ge("theScreen").innerHTML = "0";
    };
    mainDiv.append(buttonClear);

    //-//

    let buttonEqual = ce("button");
    buttonEqual.style.position = "absolute";
    buttonEqual.style.left = -60 +"px";
    buttonEqual.style.top = 120 +"px";
    buttonEqual.innerHTML = "=";
    buttonEqual.className = "buttonSymbols";
    buttonEqual.onclick = function()
    {
        // comment out this below statement if you don't want it to reset calculationArray to empty
        calculationArray = [];

        ge("theScreen").innerText = eval(ge("theScreen").innerText);
    };
    mainDiv.append(buttonEqual);

    //-//

    let numbersDiv = ce("div");
    numbersDiv.style.position = "relative";
    numbersDiv.style.left = 0 + "px";
    numbersDiv.style.top = 5 + "px";
    numbersDiv.style.display = "grid";
    numbersDiv.style.gridTemplateRows = "70px 70px 70px";
    numbersDiv.style.gridTemplateColumns = "50px 50px 50px";
    mainDiv.append(numbersDiv);

    //-//

    let button1 = ce("button");
    button1.innerHTML = 1;
    button1.className = "buttonNumbers";
    button1.onclick = function()
    {
        // add the number to the end of calculationArray
        calculationArray.push(1);

        // we use join to get rid of the comma
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button1);

    //-//

    let button2 = ce("button");
    button2.innerHTML = 2;
    button2.className = "buttonNumbers";
    button2.onclick = function()
    {
        calculationArray.push(2);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button2);

    //-//

    let button3 = ce("button");
    button3.innerHTML = 3;
    button3.className = "buttonNumbers";
    button3.onclick = function()
    {
        calculationArray.push(3);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button3);

    //-//

    let button4 = ce("button");
    button4.innerHTML = 4;
    button4.className = "buttonNumbers";
    button4.onclick = function()
    {
        calculationArray.push(4);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button4);

    //-//

    let button5 = ce("button");
    button5.innerHTML = 5;
    button5.className = "buttonNumbers";
    button5.onclick = function()
    {
        calculationArray.push(5);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button5);

    //-//

    let button6 = ce("button");
    button6.innerHTML = 6;
    button6.className = "buttonNumbers";
    button6.onclick = function()
    {
        calculationArray.push(6);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button6);

    //-//

    let button7 = ce("button");
    button7.innerHTML = 7;
    button7.className = "buttonNumbers";
    button7.onclick = function()
    {
        calculationArray.push(7);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button7);

    //-//

    let button8 = ce("button");
    button8.innerHTML = 8;
    button8.className = "buttonNumbers";
    button8.onclick = function()
    {
        calculationArray.push(8);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button8);

    //-//

    let button9 = ce("button");
    button9.innerHTML = 9;
    button9.className = "buttonNumbers";
    button9.onclick = function()
    {
        calculationArray.push(9);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button9);

    //-//

    let button0 = ce("button");
    button0.innerHTML = 0;
    button0.className = "buttonNumbers";
    button0.onclick = function()
    {
        calculationArray.push(0);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    numbersDiv.append(button0);

    //-//

    let symbolsDiv = ce("div");
    symbolsDiv.style.position = "absolute";
    symbolsDiv.style.left = 165 + "px";
    symbolsDiv.style.top = 112 + "px";
    symbolsDiv.style.display = "grid";
    symbolsDiv.style.gridTemplateRows = "50px 50px 50px";
    symbolsDiv.style.gridTemplateColumns = "50px 50px 50px";
    mainDiv.append(symbolsDiv);
    
    //-//

    let buttonAddition = ce("button");
    buttonAddition.innerHTML = "+";
    buttonAddition.className = "buttonSymbols";
    buttonAddition.onclick = function()
    {
        calculationArray.push("+");
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    symbolsDiv.append(buttonAddition);

    //-//

    let buttonSubtraction = ce("button");
    buttonSubtraction.innerHTML = "-";
    buttonSubtraction.className = "buttonSymbols";
    buttonSubtraction.onclick = function()
    {
        calculationArray.push("-");
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    symbolsDiv.append(buttonSubtraction);

    //-//

    let buttonMultiplication = ce("button");
    buttonMultiplication.innerHTML = "*";
    buttonMultiplication.className = "buttonSymbols";
    buttonMultiplication.onclick = function()
    {
        calculationArray.push("*");
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    symbolsDiv.append(buttonMultiplication);

    //-//

    let buttonDivision = ce("button");
    buttonDivision.innerHTML = "/";
    buttonDivision.className = "buttonSymbols";
    buttonDivision.onclick = function()
    {
        calculationArray.push("/");
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    symbolsDiv.append(buttonDivision);

    //-//

    let buttonModulo = ce("button");
    buttonModulo.innerHTML = "%";
    buttonModulo.className = "buttonSymbols";
    buttonModulo.onclick = function()
    {
        calculationArray.push("%");
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    symbolsDiv.append(buttonModulo);

    //-//

    let buttonPi = ce("button");
    buttonPi.innerHTML = "π";
    buttonPi.className = "buttonSymbols";
    buttonPi.onclick = function()
    {
        calculationArray.push(Math.PI);
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    symbolsDiv.append(buttonPi);

    //-//

    let buttonParenthesisOpen = ce("button");
    buttonParenthesisOpen.innerHTML = "(";
    buttonParenthesisOpen.className = "buttonSymbols";
    buttonParenthesisOpen.onclick = function()
    {
        calculationArray.push("(");
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    symbolsDiv.append(buttonParenthesisOpen);

    //-//

    let buttonParenthesisClosed = ce("button");
    buttonParenthesisClosed.innerHTML = ")";
    buttonParenthesisClosed.className = "buttonSymbols";
    buttonParenthesisClosed.onclick = function()
    {
        calculationArray.push(")");
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    symbolsDiv.append(buttonParenthesisClosed);

    //-//

    let buttonDelete = ce("button");
    buttonDelete.innerHTML = "Del";
    buttonDelete.className = "buttonSymbols";
    buttonDelete.onclick = function()
    {
        if (calculationArray.length > 1)
        {
            calculationArray.pop();
            ge("theScreen").innerHTML = calculationArray.join("");
        }
        else
        {
            calculationArray = [];

            ge("theScreen").innerHTML = 0;
        }   
    }
    symbolsDiv.append(buttonDelete);

    //-//

    let buttonDecimalPoint = ce("button");
    buttonDecimalPoint.innerHTML = ".";
    buttonDecimalPoint.className = "buttonSymbols";
    buttonDecimalPoint.onclick = function()
    {
        calculationArray.push(".");
        ge("theScreen").innerHTML = calculationArray.join("");
    }
    symbolsDiv.append(buttonDecimalPoint);
}

//-//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

