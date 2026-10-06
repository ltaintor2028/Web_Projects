function processOrder()
{
    const output = document.getElementById("receiptOutput");
    const itemCount = document.getElementById("itemCount");
    const itemDescription = document.getElementById("itemDescription");

    let total = "";

    total = doReceipt(itemCount.value);
    total += doItem(itemCount.value, itemDescription.value);
    total += doBarcode(itemDescription.value);
    total += checkWords(itemDescription.value);



    output.innerHTML = total;
    itemCount.value -= itemCount.value;
    itemDescription.value = "";
   
}




function doReceipt(num)
{
    let orderReceipt = "ORDER RECEIPT:";
    //checks if quantity is unreasonable
     if (num > 0 && num < 20)
    {
        for (let i = 0; i < num; i++)
        {
            orderReceipt += " *";
        }
    }

    // if the number in quantity is unreasonable do this
    else
    {
        orderReceipt += " Invalid Quantity(Must be between 1 and 19)";
    }
    orderReceipt += "<br>";
    return orderReceipt;
}

function doItem(num, text)
{
    let item = "ITEM:";

    // checks to see if the Product notes ar empty or not
    if (text === "")
    {
        item = " Order Error: Description cannot be blank.";
    }
    // if the product notes are valid do this
    else
    {
        for (let i = 0; i < num; i++) 
        {
            item += " " + text;   
            if (i >= 25)
            {
                item += "...";
                break;
            }
        }
    }
    //add this so next stuff goes on new line
    item += "<br>";
    return item;
    
}

function doBarcode(text)
{
    let barcode = "BARCODE: ";
    let productCode = "";
    // we do the -1 because code starts from zero when counting, not 1
    let textLen = text.length - 1
    //checks if the description is invalidawd
    if (text !== "")
    {
        for (let i = textLen; i >= 0; i--)
        {
            if (i % 2 == 0)
            {
                productCode += text[i].toLowerCase();
            }
            else
            {
                productCode += text[i].toUpperCase();
            }
        }
        barcode += shiftIntoString(productCode);

    }
    else
    {   
        barcode += " Barcode Error: Invalid parameters";
    }
    barcode += "<br>";
    return barcode;
}

function shiftIntoString(theChar) { 
    let myString = "";
    for (let i = 0; i < theChar.length; i++) {
  
        let charCode = theChar.charCodeAt(i); 
        // Shift lowercase letters ('a' = 97 to 'z' = 122)
        //changed the +2 to a -2 to swap the encryption
        if (charCode >= 97 && charCode <= 122) { 
                charCode = ((charCode - 97 + 2) % 26) + 97; 
        }
        // Shift uppercase letters ('A' = 65 to 'Z' = 90) 
        else if (charCode >= 65 && charCode <= 90) { 
            charCode += 2;
        } 
        myString += String.fromCharCode(charCode); 
    }
 
    return myString;
}   

function checkWords(text)
{   
    let totalWords = "TOTAL WORDS: ";
    let numWords = 0;
    let validString = "";
    let sameWord = false;
    //for loop that inputs original string and sets valid string to only letters and spaces
    for (let i = 0; i < text.length; i++)
    {
        let charCode = text.charCodeAt(i);
        // if is a lowercase letter, an uppercase letter, or a space
        if ((charCode <= 122 && charCode >= 97) || (charCode <= 90 && charCode >= 65) || charCode == 32)
        {
            //adds the valid letter to the string
            validString += text[i];
        }
    }
    // for loop that actually checks for word count
    for (let i = 0; i < validString.length; i++)
    {
        let charCode = validString.charCodeAt(i);
        // if is a lowercase or uppercase letter and there wasn't a letter beforehand
        if (((charCode <= 122 && charCode >= 97) || (charCode <= 90 && charCode >= 65)) && sameWord == false) 
        {
            //adds one to num words and sets same word to true so it doesn't set every letter as its own word
            numWords += 1;
            sameWord = true;
        }
        // if the current charcode is a space, sets same word to false
        else if (charCode == 32) 
        {
            sameWord = false;
        }
        
    }
    //combines the number of words with the result variable
    totalWords += numWords;
    return totalWords;
}


// first go through all of string removing charcodes that are not a valid letter or a space
// next check to see if the charcode is a valid letter
// if it is add word and change "stillword" boolean to true
// if a space is seen set "stillword" to false
// next tile you see a valide letter because still word is false it is a new word
