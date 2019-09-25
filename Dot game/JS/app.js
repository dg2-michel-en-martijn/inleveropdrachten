//var objImage= null;
function init(){
  objImage=document.getElementById("movediv");
  objImage.style.position='relative';
  objImage.style.left='106px';
  objImage.style.top='152px';
}
function getKeyAndMove(e){
  var key_code=e.which||e.keyCode;
  switch(key_code){
    case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveUp();
      break;
    case 39: //right arrow key
      moveRight();
      break;
    case 40: //down arrow key
      moveDown();
      break;
  }
}
function moveLeft(){
  if (parseInt(objImage.style.left)>0) {
        objImage.style.left=parseInt(objImage.style.left)-53;
  }
}
function moveUp(){
  if (parseInt(objImage.style.top)>100) {
  objImage.style.top=parseInt(objImage.style.top)-50;
  }
}
function moveRight(){
  if (parseInt(objImage.style.left)<200) {
    objImage.style.left=parseInt(objImage.style.left)+53;
  }
}
function moveDown(){
  if (parseInt(objImage.style.top)<250) {
  objImage.style.top=parseInt(objImage.style.top)+50;
  }
}
window.onload=init;
