// <script type="text/javascript">
  //init object globally
  var objImage= null;
  var boxNumber = 0;
  var activeKeyBoard = true;
  function init(){
  document.getElementById("addNewBox").addEventListener("click", createBox);
  document.getElementById("toggleKeyBoard").addEventListener("click", toggleKeyBoard);
}
  function createBox(e) {
  boxNumber++;
  var div = document.createElement("div");
  div.setAttribute("id", boxNumber);
  div.setAttribute("class", "rectangle");
  div.setAttribute("z-index", boxNumber);
  document.body.appendChild(div);
  document.getElementById(boxNumber).addEventListener("click", function (event){
  console.log('ddd', event);
  selectedBox(event.target.id);
});
  selectedBox(boxNumber);
}
  function selectedBox(id){
  if(objImage){
  objImage.style.background='red';
}
  objImage=document.getElementById(id);
  objImage.style.position='relative';
  objImage.style.background='grey';
}
  function deleteSelectedBox(id){
  objImage.remove();
  objImage = null;
}
  function getKeyAndMove(e){
  if(!activeKeyBoard){
  return false;
}
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
  case 46:
  deleteSelectedBox();
  break;
}
}
  function moveLeft(){
  const left = objImage.style.left ? objImage.style.left : '0px';
  objImage.style.left=parseInt(left)-5 +'px';
}
  function moveUp(){
  const top = objImage.style.top ? objImage.style.top : '0px';
  objImage.style.top=parseInt(top)-5 +'px';
}
  function moveRight(){
  const left = objImage.style.left ? objImage.style.left : '0px';
  objImage.style.left=parseInt(left)+5 +'px';
}
  function moveDown(){
  const top = objImage.style.top ? objImage.style.top : '0px'
  objImage.style.top=parseInt(top)+5 +'px';
}
  function toggleKeyBoard(){
  activeKeyBoard = !activeKeyBoard;
  const toggleKeyButton = document.getElementById('toggleKeyBoard');
  toggleKeyButton.style.background = activeKeyBoard ? 'Green' : 'red';
}
  window.onload=init;
// </script>
