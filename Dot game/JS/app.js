var x = 2;
    var y = 2;
    function beweeg(event)
    {
      if(window.event)
        event = window.event;
        var table = document.getElementById("gameboard");
        table.rows[y].cells[x].style.backgroundColor = "#fff";
        switch(event.keyCode)
    {
        case 37: //pijltje naar links
            if(--x < 0)
            {
                x = 0;
            }
        break;
        case 38://pijltje naar boven
            if(--y < 0)
            {
                y = 0;
            }
        break;
        case 39: //pijltje naar rechts
            if(++x > 4)
            {
                x = 4;
            }
        break;
        case 40: //pijltje naar beneden
            if(++y > 4)
            {
                y = 4;
            }
        break;
    }
    table.rows[y].cells[x].style.backgroundColor = "#000";
}
  function maakEvents()
  {
    document.body.onkeydown = beweeg;
  }
  window.onload = maakEvents;
