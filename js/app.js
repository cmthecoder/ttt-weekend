/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')

const messageEl = document.getElementById('message')

const listenToBoard = document.querySelector('.board')


/*----------------------------- Event Listeners -----------------------------*/
listenToBoard.addEventListener('click', handleClick)


/*-------------------------------- Functions --------------------------------*/
init()


function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}


function handleClick(evt){
  console.log(evt.target.id)
  let indexSquare = evt.target.id
  let squareIdx = indexSquare.slice(2, 3)
  console.log(squareIdx)
}


function render(){
  board.forEach((box, idx) => {
    if(box === 1){
      squareEls[idx].textContent = 'X'
      squareEls[idx].style.color = 'yellow'
      
      // style the square depending on the value
    }
    if(box === -1){
      squareEls[idx].textContent = 'O'
      squareEls[idx].style.color = 'blue'
      // style the square depending on the value
    }
    
    if(winner === null){
      if(turn === 1){
        messageEl.textContent = "Player X's Turn!"
      } else{
        messageEl.textContent = "Player O's Turn!"
      }
    }  else if(winner === 'T'){
      messageEl.textContent = "It's a tie!"
    } else {
      messageEl.textContent = 'Congradulations Player ' + turn + ' has Won!'
    }
  });
}
