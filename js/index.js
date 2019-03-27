function closepop(){
  document.getElementById('popup').style.display='none';
}
var current = 0;
var total;

function initialize(){
  box = document.getElementById("popup");
  msg = box.getElementsByClassName('popmessage');
  total = msg.length;
  change_msg = setInterval(function(){
    msg[current].classList.remove('popactive');
    current = (current+1)%total;
    msg[current].classList.add('popactive');
  }, 15000)
}
