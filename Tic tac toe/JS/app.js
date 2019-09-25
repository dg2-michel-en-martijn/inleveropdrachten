//variables and players.
var players=[];
var markers=["X", "O"];
var whoseTurn = 0;
players[0] = "Player1";
players[1] = "Player2";


// play the game
function play(clickedDiv)
{
  clickedDiv.onclick = "";
  clickedDiv.innerHTML = "<span id='XenO'>"+ markers[whoseTurn] +"</span>";
  toggle();
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
