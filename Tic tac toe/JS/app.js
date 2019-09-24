const ticTacToe = new TicTacToe();
ticTacToe.start();

function TicTacToe() {
  const board = new Board();
  const humanPlayer = new HumanPlayer();
  const humanPlayer2 = new HumanPlayer2();
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
  console.log(this.positions);
}

function HumanPlayer() {

  this.takeTurn = function() {

  }
}

function HumanPlayer2() {

  this.takeTurn = function() {

  }
}
