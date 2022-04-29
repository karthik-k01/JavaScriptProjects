var displayArea = document.getElementById("display");

function isOperator(buttonText) {
  if (
    buttonText == "+" ||
    buttonText == "-" ||
    buttonText == "*" ||
    buttonText == "/" ||
    buttonText == "%"
  )
    return true;
  else return false;
}
function buttonClicked(buttonText) {
  if (displayArea.innerText.length >= 24) return;

  if (buttonText === "CLR") {
    displayArea.innerText = "0";
    return;
    }
    
  if (buttonText === "DEL") {
    displayArea.innerText = displayArea.innerText.slice(0, -1);
    return;
    }
    
  if (buttonText === "=") {
    try {
      displayArea.innerText = eval(displayArea.innerText);
    } catch (error) {
      displayArea.innerText = 0;
    }
    return;
    }
    
  if (displayArea.innerText === "0") {
    //if its in initial stage '0'
    if (buttonText == "00" || buttonText == "0") {
      //Dont do anything if button clicked 0 or 00 at start
      return
        

      }
      if (buttonText == "." || isOperator(buttonText)) {
        //if button clicked is dot or any operators, then it will be '0' + operator
        displayArea.innerText = "0" + buttonText;
        return;
        }
        

        displayArea.innerText = buttonText;
  } else {
    if (
      isOperator(displayArea.innerText[displayArea.innerText.length - 1]) &&
      isOperator(buttonText)
    ) {
      //replace the operator
      displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText;
      return;
      }
      

      displayArea.innerText = displayArea.innerText + buttonText;
      

  }
}
