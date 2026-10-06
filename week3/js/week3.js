function week3Go()
{

    console.log("in");
    const textInput = document.getElementById("textInput");
    const textAInput = document.getElementById("textAInput");

    const rdoValue = document.getElementsByName("ageRange");
    const chkValue = document.getElementsByName("foodStuff");
    const output = document.getElementById("output");
    const colorPicker = document.getElementById("selColor");
    const numInput = document.getElementById("numInput");
    const telInput = document.getElementById("telInput");
    const passInput = document.getElementById("passInput")
    let foundOne = false;

    output.innerHTML = "";


    output.innerHTML += "Random Text box 1: " + textInput.value;
    output.innerHTML += "<br>Random Text Area: " + textAInput.value;
    output.innerHTML += "<br>Number you chose: " + numInput.value;
    output.innerHTML += "<br>Your Phone Number: " + telInput.value;
    output.innerHTML += "<br>Your Password: " + passInput.value;
    

    for (let i = 0; i < rdoValue.length; i++)
    {
        if (rdoValue[i].checked)
        {
            output.innerHTML += "<br>Age Range Chosen: " + rdoValue[i].value;
            break;
        }
    }

    for (let i = 0; i < chkValue.length; i++)
    {
        if (chkValue[i].checked)
        {
            output.innerHTML += "<br>Food Stuff Chosen: " + chkValue[i].value;
            foundOne = true
        }
    }
    if (!foundOne)
    {
        output.innerHTML += "<br>No Food Stuff Chosen ";
    }

    output.innerHTML += "<br>The Color you Chose:" + colorPicker.value
    
}
