function shiftIntoString(theChar) { 
  // charCodeAt() finds the ASCII code of a character in a string
  // Since we are just passing a character our string only contains
  // a string with one element at position 0.  If we wanted to walk
  // through an entire string, we would have a for loop going through
  // the string and we would get each code at charCodeAt(i)
  let charCode = theChar.charCodeAt(0); 
  // Shift lowercase letters ('a' = 97 to 'z' = 122)

   if (charCode >= 97 && charCode <= 122) { 
          charCode = ((charCode - 97 + 2) % 26) + 97; 
   }
// Shift uppercase letters ('A' = 65 to 'Z' = 90) 
   else if (charCode >= 65 && charCode <= 90) { 
           charCode = ((charCode - 65 + 2) % 26) + 65;
   } 
 
return String.fromCharCode(charCode); 
}   

function shiftOutString(theChar) { 
    let myString = "";
    for (let i = 0; i < theChar.length; i++) {
  
        let charCode = theChar.charCodeAt(i); 
        // Shift lowercase letters ('a' = 97 to 'z' = 122)
        //changed the +2 to a -2 to swap the encryption
        if (charCode >= 97 && charCode <= 122) { 
                charCode = ((charCode - 97 - 2) % 26) + 97; 
        }
        // Shift uppercase letters ('A' = 65 to 'Z' = 90) 
        else if (charCode >= 65 && charCode <= 90) { 
                charCode = ((charCode - 65 - 2) % 26) + 65;
        } 
        myString += String.fromCharCode(charCode); 
    }
 
    return myString;
}   

//starts listeners after page load
document.addEventListener("DOMContentLoaded", function() {
    // put this here or next listeners would fail because values
    //wouldn't be valid
    const message = document.getElementById("message");
    const clickButton =  document.getElementById("clickButton");
    //starts a listener in message for any inputs
    message.addEventListener("beforeinput", function(event) {
        let typed = event.data;
        
        if (typed) {
            event.preventDefault();
            message.value += shiftIntoString(typed);
        }

    });

    clickButton.addEventListener("click", function() {
        const textOutput = document.getElementById("textOutput");
        textOutput.innerHTML = shiftOutString(message.value.trim());

    });

});

