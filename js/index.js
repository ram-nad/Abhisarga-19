function closepop(){
  document.getElementById('popup').style.display='none';
}
var current = 0;
var total;

function initialize(){
  box = document.getElementById("popup");
  msg = box.getElementsByClassName('popmessage');
  total = msg.length;
  function change(){
    msg[current].classList.remove('popactive');
    current = (current+1)%total;
    msg[current].classList.add('popactive');
  }
  change_msg = setInterval(change, 15000);
  document.getElementById('next').addEventListener("click", change);
}
