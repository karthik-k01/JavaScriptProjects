var displayArea = document.getElementById("display")

function isOperator(buttonText){
    if(buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/' || buttonText == '%')
        return true
    else
        return false
}
function buttonClicked(buttonText){
    if(displayArea.innerText === '0'){                                          //if its in initial stage '0'
        if(buttonText != '00' && buttonText != '0'){                            //Dont do anything if button clicked 0 or 00 at start
            if(buttonText == '.' || isOperator(buttonText)){                    //if button clicked is dot or any operators, then it will be '0' + operator
                displayArea.innerText = displayArea.innerText + buttonText
            }
            else{
                displayArea.innerText = buttonText
            }
            
        }
        
    }else{
        if(isOperator(displayArea.innerText[displayArea.innerText.length -1] && isOperator(buttonText))){    
                                                                                //replace the operator
        }
        displayArea.innerText = displayArea.innerText + buttonText
    }
    
}