 const textInput = document.getElementById("textInput");
/*
    name: fillOutput
    Purpose: function to fill output
    Owner: Liam
*/

function fillOutput() {
    const textInput = document.getElementById("textInput");
    const textOutput = document.getElementById("textOutput");
    let textValue = textInput.value.trim();

    //check for empty
    if (textValue == "") {
        textOutput.innerHTML = "Comeon man, enter something";
        textInput.style.background = "#F54927";

            // Add class to make placeholder text white, need to 
            // do cause placeholder property
            //not directly accessable in JS
        textInput.classList.add("error-placeholder");
    }
    else {
    textOutput.innerHTML = textInput.value;
    textInput.value = "";
    textInput.style.background = "#9ca3af";
    }
}

//
document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const clickButton = document.getElementById("clickButton");

    //this allows you to press enter to print the input in the output
    textInput.addEventListener("keydown", function(event) {
        //removes spaces from value of testinput when using trim
        let textValue = textInput.value.trim();
        if(event.key == "Enter") {
            fillOutput();
        }

    });
    //listens for a click action on the input box
    textInput.addEventListener("click", function(event) {
    
        textInput.style.background = "white";
        //stops using the class, essentially turning the text back to grey
        textInput.classList.remove("error-placeholder");
        clickButton.style.backgroundColor = "#4f46e5";

    });

     textInput.addEventListener("keydown", function(event) {
        let textValue = textInput.value.trim();
        
        if(event.key == "Z") {
            clickButton.style.backgroundColor = "green";
        }

    });


    


});


