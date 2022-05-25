let grids = document.getElementsByClassName("col")
let currentTurnText = document.getElementById("currentTurnText")
let currentTurn = 1

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const singleMove = (index) => {
    if (!grids[index].innerText) {
        grids[index].innerText = currentTurn === 1 ? "X" : "O"
        let winningPlayer = checkWinningStatus()
        if (winningPlayer) {
            alert(winningPlayer === "X" ? "Player 1 Won!" : "Player 2 Won!")
        }
        currentTurn = (currentTurn === 1 ? 2 : 1)
        currentTurnText.innerText = `Player ${currentTurn}'s turn`
    }

}

const checkWinningStatus = () => {
    for (let i = 0; i < winningCombinations.length; i++){
        combination = winningCombinations[i]
        if (grids[combination[0]].innerText === grids[combination[1]].innerText && grids[combination[1]].innerText === grids[combination[2]].innerText && grids[combination] !== '') {
            return grids[combination[0]].innerText
        }
    }
    return 
}





