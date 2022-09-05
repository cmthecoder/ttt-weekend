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

const resetBtnEl = document.getElementById('button')

/*----------------------------- Event Listeners -----------------------------*/
listenToBoard.addEventListener('click', handleClick)

resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()


function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}


function handleClick(evt){
  let indexSquare = evt.target.id
  let sqIdx = indexSquare.slice(2, 3)

  if(board[sqIdx] != null ){
    return
  }
  if(winner != null){
    return
  }
  board[sqIdx] = turn
  turn *= -1
  getWinner()
  render()
}


function render(){
  board.forEach((box, idx) => {
    if(box === 1){
      squareEls[idx].textContent = 'X'
      squareEls[idx].style.color = 'yellow'
    }

    if(box === -1){
      squareEls[idx].textContent = 'O'
      squareEls[idx].style.color = 'blue'
    }

    if(winner === null){
      messageEl.textContent = `Player ${turn === 1 ? 'X ' : 'O '} turn`
    } else if (winner === 'T'){
      messageEl.textContent = `It's a tie`
    } else {
      messageEl.textContent = `Player ${winner} wins`
    }
  });
}


function getWinner(){
  let total = []
  winningCombos.forEach(function(combo){
    const sum = board[combo[0]] + board[combo[1]] + board[combo[2]]
    total.push(sum)
  })

  let xIsW = total.some(x =>  x === 3)

  let oIsW = total.some(o =>  o === -3)

  let isTie = board.some(square => square === null)
  if(xIsW){
    winner = 'X'
  } else if(oIsW){
    winner = "O"
  } else{
    if(isTie === false){
      winner = 'T'
    }
  }
}