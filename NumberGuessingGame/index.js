let randomNumber = Math.trunc(Math.random() * 100);
let chancesLeft = 10;
let footerDiv = document.getElementsByClassName("footer-Div");
let footerP = document.createElement("p");
document.getElementById("chancesLeft").innerText =
  "Chances Left: " + chancesLeft;
function verify() {
  --chancesLeft;
  if (chancesLeft > 0) {
    let inputNumber = document.getElementById("input-number").value;

    document.getElementById("lastGuess").innerText += " " + inputNumber + " ";
    document.getElementById("chancesLeft").innerText =
      "Chances Left: " + chancesLeft;
    if (inputNumber == randomNumber) {
      document.getElementById("hint").innerText = "You guessed the number!";

      return;
    } else if (inputNumber > randomNumber) {
      document.getElementById("hint").innerText =
        "Too High! Choose a lower number";
    } else {
      document.getElementById("hint").innerText =
        "Too Low! Choose a higher number";
    }
  } else {
    document.getElementById("hint").innerText =
      "Your chances are over! Refresh for a new game";
  }
}
