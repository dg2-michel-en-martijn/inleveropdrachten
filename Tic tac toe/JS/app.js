/* JS TIC TAC TOE */
const ticTacToe = new TicTacToe();
ticTacToe.start();

function TicTacToe() {
  const board = new Board();
  const humanPlayer = new HumanPlayer(board);
  const humanPlayer2 = new HumanPlayer2(board);
  let turn = 0;

  this.start = function() {
    const config = { childList: true };
    const observer = new MutationObserver(() => takeTurn());
    board.positions.forEach((el) => observer.observe(el, config))
    takeTurn();
  }

  function takeTurn() {

    if (turn % 2 == 0) {
      humanPlayer.takeTurn();
    } else {
      humanPlayer2.takeTurn();
    }
    turn++;
  }
}

function Board() {
  this.positions = Array.from(document.querySelectorAll('.col'));
}
/* PLAYER 1 */
function HumanPlayer(board) {
    this.takeTurn = function() {
    board.positions
      .forEach(el => el.addEventListener('click', handleTurnTaken));
 }

  function handleTurnTaken(event) {
    event.target.innerText = 'X';
    board.positions
      .forEach(el => el.removeEventListener('click', handleTurnTaken));
  }
}

/* PLAYER 2 */
function HumanPlayer2(board) {
  this.takeTurn = function() {
    const availablePositions =
      board.positions.filter((p) => p.innerText === '');
      board.positions
        .forEach(el => el.addEventListener('click', handleTurnTaken2));
}
  function handleTurnTaken2(event) {
    event.target.innerText = 'O';
    board.positions
      .forEach(el => el.removeEventListener('click', handleTurnTaken2));
  }
}
