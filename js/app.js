/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')

const messageEl = document.getElementById('message')
// console.log(squareEls)
// console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner === null
  render()
}

function render(){
  board.forEach((box, idx) => {
    if(box === 1){
      squareEls[idx].textContent = 'X'
    }
    if(box === -1){
      squareEls[idx].textContent = 'O'
    }
  });
}

console.log('box')
