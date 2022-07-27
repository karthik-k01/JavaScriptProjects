let toDoBlock = document.getElementById("to-do-block");
let toDoModal = document.getElementById("createToDoModal")

const createToDo = () => {
  
  const toDoInput = document.getElementById("to-do-input").value;
  const valueSelected = document.getElementById("to-do-priority-input").value;
  const toDoDeadline = new Date(
    document.getElementById("to-do-date").value
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  let toDoInputInvalid = document.getElementById("toDoInputInvalid");
  let toDoInputValid = document.getElementById("toDoInputValid");
  let toDoDateValid = document.getElementById("toDoDateValid")
  let toDoDateInvalid = document.getElementById("toDoDateInvalid")
  

  if (toDoInput === "") {
    toDoInputInvalid.style.display = "block";
    toDoInputValid.style.display = "none";
  } else {
    toDoInputInvalid.style.display = "none";
    toDoInputValid.style.display = "block";
  }

  if (toDoDeadline === "Invalid Date") {
    toDoDateInvalid.style.display = "block"
    toDoDateValid.style.display = "none"
  } else {
    toDoDateInvalid.style.display = "none"
    toDoDateValid.style.display = "block"
  }

  if (toDoInput !== "" && toDoDeadline !== "Invalid Date") {
    createToDoDiv(toDoInput, valueSelected, toDoDeadline)
    document.getElementById("to-do-input").value = "";
    document.getElementById("to-do-date").value = "";
    document.getElementById("to-do-priority-input").value = "Medium";
    toDoInputValid.style.display = "none";
    toDoDateValid.style.display = "none";

  }
};


