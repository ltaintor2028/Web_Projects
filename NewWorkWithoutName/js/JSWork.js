const numInput = document.getElementById("numInput");
/*
    name: fillOutput
    Purpose: function to fill output
    Owner: Liam
*/

function fillOutput()
{
    const numInput = document.getElementById("numInput");
    const textOutput = document.getElementById("textOutput");
    let textValue = numInput.value.trim();

    //check for empty
    if (textValue == "")
    {
        textOutput.innerHTML = "Comeon man, enter something";
        numInput.style.background = "#F54927";

        // Add class to make placeholder text white, need to 
        // do cause placeholder property
        //not directly accessable in JS
        numInput.classList.add("error-placeholder");
    }
    else
    {
        textOutput.innerHTML = numInput.value;
        numInput.value = "";
        numInput.style.background = "#9ca3af";
    }
}




// --------------------  9/24/2026 doin functions -----------------------------

function one()
{
    const num = document.getElementById("numInput");
    let text = document.getElementById("textInput");
    let output = document.getElementById("textOutput");
    //one parameter - no return value
    two(num.value);
    //two parameters - return value of text
    let result = three(num.value, text.value);
    output.innerHTML += "<br>" + result;
    output.innerHTML += "<br>" + four(num.value, text.value, output);

}

function two(count)
{
    if (count > 15)
    {
        output.innerHTML = "No Dice";
    }
    else
    {
        const output = document.getElementById("textOutput");
        let text = document.getElementById("textInput");
        for (let i = 0; i < count; i++)
        {
            console.log(text.value);
            output.innerHTML += " " + text.value;

        }
    }
}

function three(count, theText)
{
    if (count < 1 || theText.value == "Zero")
    {
        output.innerHTML = "No Dice";
    }
    else
    {
        let message = "THREE: ";
        for (let i = 0; i < count; i++)
        {
            message += " " + theText;
        }
        return message;
    }
}

function four(count, theText, theOutput)
{
    let result = "FOUR: ";
    let someNum = theText.length - 1
    if (isNaN(count) || count < 0 || theText === "")
    {
        result += "Positive numbers && some Text";

    }
    else
    {   
        
        for (let i = someNum; i >= 0; i--)
        {
            if (i % 2 == 0)
            {
                result += theText[i].toUpperCase();
            }
            else
            {
                result += theText[i].toLowerCase();
            }
        }
    }
    return result;
}


// ------------------------------------------------------------------------------






















































//
document.addEventListener("DOMContentLoaded", function ()
{
    const numInput = document.getElementById("numInput");
    const clickButton = document.getElementById("clickButton");

    //this allows you to press enter to print the input in the output
    numInput.addEventListener("keydown", function (event)
    {
        //removes spaces from value of testinput when using trim
        let textValue = numInput.value.trim();
        if (event.key == "Enter")
        {
            fillOutput();
        }

    });
    //listens for a click action on the input box
    numInput.addEventListener("click", function (event)
    {

        numInput.style.background = "white";
        //stops using the class, essentially turning the text back to grey
        numInput.classList.remove("error-placeholder");
        clickButton.style.backgroundColor = "#4f46e5";

    });

    numInput.addEventListener("keydown", function (event)
    {
        let textValue = numInput.value.trim();

        if (event.key == "Z")
        {
            clickButton.style.backgroundColor = "green";
        }

    });





});


