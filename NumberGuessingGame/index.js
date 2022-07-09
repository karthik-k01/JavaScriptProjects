let randomNumber = Math.trunc(Math.random() * 100);
let chancesLeft = 10;
document.getElementById("hint").style.display = "none"
document.getElementById("chancesLeft").innerText =
  "Chances Left: " + chancesLeft;
function verify() {
  --chancesLeft;
  document.getElementById("chancesLeft").innerText =
      "Chances Left: " + chancesLeft;
  if (chancesLeft > 0) {
    let inputNumber = document.getElementById("input-number").value;

    document.getElementById("lastGuess").innerText += " " + inputNumber + " ";
    
    if (inputNumber == randomNumber) {
      document.getElementById("hint").innerText = "You guessed the number!";
      document.getElementById("hint").style.display = "block"
      document.getElementById("hint").classList = 'success'
      return;
    } else if (inputNumber > randomNumber) {
      document.getElementById("hint").innerText =  "Too High! Choose a lower number";
      document.getElementById("hint").style.display = "block" 
      document.getElementById("hint").classList = 'danger'
        
    } else {
      document.getElementById("hint").innerText = "Too Low! Choose a higher number";
      document.getElementById("hint").style.display = "block"  
      document.getElementById("hint").classList = 'danger'
    }
  } else {
    document.getElementById("hint").innerText = "Your chances are over! Refresh for a new game";
    document.getElementById("hint").style.display = "block"
    document.getElementById("hint").classList = 'gameOver'
    document.getElementById("submit-button").disabled = true;
  }
}
