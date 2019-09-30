var leftArray = [];
var rightArray = [];
$(document).ready(function(){
  $("#toevoegen").click(function(){
    if($("#naam").val() != ""){
      leftArray.push($("#naam").val() + "<br/>");
      document.getElementById('blok1').innerHTML = leftArray.join("");
    }
  });
  $("#rechts").click(function(){
    rightArray.push(leftArray.join(""));
    rightArray.join("");
    leftArray = [];
    document.getElementById('blok1').innerHTML = leftArray.join("");
    document.getElementById('blok2').innerHTML = rightArray;
  });
});
