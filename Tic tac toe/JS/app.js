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

function HumanPlayer(board) {

  this.takeTurn = function() {
    board.positions
      .forEach(el => el.addEventListener('click', handleTurnTaken));
 }

  function handleTurnTaken(event) {
    console.log("turn taken")
  }
}

function HumanPlayer2(board) {

  this.takeTurn = function() {

  }
}
