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
    mainDiv.style.top = 30 + "px";
    mainDiv.style.height = 340 + "px";
    mainDiv.style.borderStyle = "solid";
    mainDiv.style.borderWidth = 2 + "px";
    mainDiv.style.borderRadius = 4 + "px";
    mainDiv.style.padding = 8 + "px";
    ba(mainDiv);

    //-//

    let theScreen = ce("div");
    theScreen.id = "theScreen";
    theScreen.className = "theScreenStyle";
    theScreen.contentEditable = false;
    theScreen.textContent = 0;
    mainDiv.append(theScreen);

    //-//

    let buttonClear = ce("button");
    buttonClear.style.position = "absolute";
    buttonClear.style.top = 40 + "px";
    buttonClear.style.left = -60 +"px";
    buttonClear.textContent = "C";
    buttonClear.className = "buttonSymbols";
    buttonClear.onclick = function()
    {
        clickSound();

        calculationArray = [];
        ge("theScreen").textContent = "0";
    };
    mainDiv.append(buttonClear);

    //-//

    let buttonEqual = ce("button");
    buttonEqual.style.position = "absolute";
    buttonEqual.style.left = -60 +"px";
    buttonEqual.style.top = 90 +"px";
    buttonEqual.textContent = "=";
    buttonEqual.className = "buttonSymbols";
    buttonEqual.onclick = function()
    {
        clickSound();

        ge('history').value += ge("theScreen").innerText + '\n';

        ge("history").value += eval(ge("theScreen").innerText);

        ge('history').value += '\n';

        ge('history').value += '----';

        ge('history').value += '\n';

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
    button1.textContent = 1;
    button1.className = "buttonNumbers";
    button1.onclick = function()
    {
        clickSound2();

        // add the number to the end of calculationArray
        calculationArray.push(1);

        // we use join to get rid of the comma
        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button1);

    //-//

    let button2 = ce("button");
    button2.textContent = 2;
    button2.className = "buttonNumbers";
    button2.onclick = function()
    {
        clickSound2();

        calculationArray.push(2);

        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button2);

    //-//

    let button3 = ce("button");
    button3.textContent = 3;
    button3.className = "buttonNumbers";
    button3.onclick = function()
    {
        clickSound2();

        calculationArray.push(3);

        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button3);

    //-//

    let button4 = ce("button");
    button4.textContent = 4;
    button4.className = "buttonNumbers";
    button4.onclick = function()
    {
        clickSound2();

        calculationArray.push(4);

        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button4);

    //-//

    let button5 = ce("button");
    button5.textContent = 5;
    button5.className = "buttonNumbers";
    button5.onclick = function()
    {
        clickSound2();

        calculationArray.push(5);

        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button5);

    //-//

    let button6 = ce("button");
    button6.textContent = 6;
    button6.className = "buttonNumbers";
    button6.onclick = function()
    {
        clickSound2();

        calculationArray.push(6);

        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button6);

    //-//

    let button7 = ce("button");
    button7.textContent = 7;
    button7.className = "buttonNumbers";
    button7.onclick = function()
    {
        clickSound2();

        calculationArray.push(7);

        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button7);

    //-//

    let button8 = ce("button");
    button8.textContent = 8;
    button8.className = "buttonNumbers";
    button8.onclick = function()
    {
        clickSound2();

        calculationArray.push(8);

        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button8);

    //-//

    let button9 = ce("button");
    button9.textContent = 9;
    button9.className = "buttonNumbers";
    button9.onclick = function()
    {
        clickSound2();

        calculationArray.push(9);

        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button9);

    //-//

    let button0 = ce("button");
    button0.textContent = 0;
    button0.className = "buttonNumbers";
    button0.onclick = function()
    {
        clickSound2();

        calculationArray.push(0);

        ge("theScreen").textContent = calculationArray.join("");
    }
    numbersDiv.append(button0);

    //-//

    let symbolsDiv = ce("div");
    symbolsDiv.style.position = "absolute";
    symbolsDiv.style.left = 165 + "px";
    symbolsDiv.style.top = 85 + "px";
    symbolsDiv.style.display = "grid";
    symbolsDiv.style.gridTemplateRows = "50px 50px 50px";
    symbolsDiv.style.gridTemplateColumns = "50px 50px 50px";
    mainDiv.append(symbolsDiv);
    
    //-//

    let buttonAddition = ce("button");
    buttonAddition.textContent = "+";
    buttonAddition.className = "buttonSymbols";
    buttonAddition.onclick = function()
    {
        clickSound3();

        calculationArray.push("+");

        ge("theScreen").textContent = calculationArray.join("");
    }
    symbolsDiv.append(buttonAddition);

    //-//

    let buttonSubtraction = ce("button");
    buttonSubtraction.textContent = "-";
    buttonSubtraction.className = "buttonSymbols";
    buttonSubtraction.onclick = function()
    {
        clickSound3();

        calculationArray.push("-");

        ge("theScreen").textContent = calculationArray.join("");
    }
    symbolsDiv.append(buttonSubtraction);

    //-//

    let buttonMultiplication = ce("button");
    buttonMultiplication.textContent = "*";
    buttonMultiplication.className = "buttonSymbols";
    buttonMultiplication.onclick = function()
    {
        clickSound3();

        calculationArray.push("*");

        ge("theScreen").textContent = calculationArray.join("");
    }
    symbolsDiv.append(buttonMultiplication);

    //-//

    let buttonDivision = ce("button");
    buttonDivision.textContent = "/";
    buttonDivision.className = "buttonSymbols";
    buttonDivision.onclick = function()
    {
        clickSound3();

        calculationArray.push("/");

        ge("theScreen").textContent = calculationArray.join("");
    }
    symbolsDiv.append(buttonDivision);

    //-//

    let buttonModulo = ce("button");
    buttonModulo.textContent = "%";
    buttonModulo.className = "buttonSymbols";
    buttonModulo.onclick = function()
    {
        clickSound3();

        calculationArray.push("%");

        ge("theScreen").textContent = calculationArray.join("");
    }
    symbolsDiv.append(buttonModulo);

    //-//

    let buttonPi = ce("button");
    buttonPi.textContent = "π";
    buttonPi.className = "buttonSymbols";
    buttonPi.onclick = function()
    {
        clickSound3();

        calculationArray.push(Math.PI);

        ge("theScreen").textContent = calculationArray.join("");
    }
    symbolsDiv.append(buttonPi);

    //-//

    let buttonParenthesisOpen = ce("button");
    buttonParenthesisOpen.textContent = "(";
    buttonParenthesisOpen.className = "buttonSymbols";
    buttonParenthesisOpen.onclick = function()
    {
        clickSound3();

        calculationArray.push("(");

        ge("theScreen").textContent = calculationArray.join("");
    }
    symbolsDiv.append(buttonParenthesisOpen);

    //-//

    let buttonParenthesisClosed = ce("button");
    buttonParenthesisClosed.textContent = ")";
    buttonParenthesisClosed.className = "buttonSymbols";
    buttonParenthesisClosed.onclick = function()
    {
        clickSound3();

        calculationArray.push(")");

        ge("theScreen").textContent = calculationArray.join("");
    }
    symbolsDiv.append(buttonParenthesisClosed);

    //-//

    let buttonDelete = ce("button");
    buttonDelete.textContent = "Del";
    buttonDelete.className = "buttonSymbols";
    buttonDelete.onclick = function()
    {
        clickSound3();

        if (calculationArray.length > 1)
        {
            calculationArray.pop();
            ge("theScreen").textContent = calculationArray.join("");
        }
        else
        {
            calculationArray = [];

            ge("theScreen").textContent = 0;
        }   
    }
    symbolsDiv.append(buttonDelete);

    //-//

    let buttonDecimalPoint = ce("button");
    buttonDecimalPoint.textContent = ".";
    buttonDecimalPoint.className = "buttonSymbols";
    buttonDecimalPoint.onclick = function()
    {
        clickSound3();

        calculationArray.push(".");

        ge("theScreen").textContent = calculationArray.join("");
    }
    symbolsDiv.append(buttonDecimalPoint);

    //-//

    let history = ce('textarea');
    history.id = 'history';
    history.placeholder = '0';
    history.style.position = 'absolute';
    history.style.right = '0px';
    history.style.top = '40px';
    history.style.height = '300px';
    ba(history);

}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

