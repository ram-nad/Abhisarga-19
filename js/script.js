function initialise(){
  document.getElementById('menu').addEventListener('click',menuopen);
  document.getElementById('close').addEventListener('click',menuclose);
}
function menuopen(){
  var men = document.getElementById('fullmenu');
  men.style.height = "100vh";
  men.style.width = "100vw";
  men.style.borderBottomLeftRadius = "0"
  document.getElementById('close').style.display = "block";
  document.getElementById('inlogo').style.opacity = "1";
  document.body.style.overflowY = "hidden";
}

function menuclose(){
  var men = document.getElementById('fullmenu');
  men.style.height = "0vh";
  men.style.width = "0vw";
  men.style.borderBottomLeftRadius = "100%";
  document.getElementById('close').style.display = "none";
  document.getElementById('inlogo').style.opacity = "0";
  document.body.style.overflowY = "initial";
}
