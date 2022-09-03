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

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

// if(winner === null){
//   if(box === 1){
//     messageEl.textContent = "Player O turn"
//   }
// } else {
//   messageEl.textContent ="gg"
// }