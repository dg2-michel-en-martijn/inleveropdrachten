var leftArray = [];
var rightArray = [];
$(document).ready(function(){
  $("#toevoegen").click(function(){
    if($("#naam").val() != ""){
      leftArray.push($("#naam").val() + "<br/>");
      document.getElementById('blok1').innerHTML = leftArray.join("");
    }
  });
