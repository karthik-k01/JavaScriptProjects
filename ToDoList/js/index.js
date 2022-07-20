let toDoBlock = document.getElementById("to-do-block")




const createToDo = () => {
    const toDoInput = document.getElementById("to-do-input").value
    const valueSelected = document.getElementById("to-do-priority-input").value
    const toDoDeadline = new Date(
        document.getElementById("to-do-date").value
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });



    createToDoDiv(toDoInput, valueSelected, toDoDeadline)
}