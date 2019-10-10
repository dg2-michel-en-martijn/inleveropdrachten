//variables and players.
var players=["Player 1", "PLayer 2"];
var markers=["X", "O"];
var whoseTurn = 0;


// play the game
function play(clickedDiv)
{
  if ( clickedDIv.innerHTML === "") {
    clickedDiv.onclick = "";
    clickedDiv.innerHTML = "<span id='XenO'>"+ markers[whoseTurn] +"</span>";
    toggle();
  }
}

function toggle()
{
  if (whoseTurn == 0)
  {whoseTurn = 1;
  }
  else
  {whoseTurn = 0;
  }

  document.getElementById('game-message').innerText = players[whoseTurn] + "'s Turn";
}
