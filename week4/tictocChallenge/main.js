const O_CLASS = "o"
const X_CLASS = "x"
const cellElements = document.querySelectorAll('[data-cell')
const board = document.getElementById('board')
let oTurn
cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {
        once: true
    })
})
function handleClick(e) {

   //Place Mark
    const cell = e.target
    const currentClass = oTurn ? O_CLASS : X_CLASS
    placeMark(cell, currentClass)
    // Check the Win
    //Check the Draw
    //Switch Turns
    swapTurns()
    setBoardHoverClass()

}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}
function swapTurns(){
    oTurn = !oTurn
}
function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if (oTurn) {
    board.classList.add(O_CLASS)    
    }
    else {
        board.classList.add(X_CLASS)
    }

}