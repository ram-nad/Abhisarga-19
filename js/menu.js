function menuopen(){
  var men = document.getElementById('fullmenu');
  men.style.height = "100vh";
  men.style.width = "100vw";
  men.style.borderBottomLeftRadius = "0"
  document.getElementById('close').style.display = "block";
  document.getElementById('list').style.display = "block";
  document.getElementById('inlogo').style.display = "block";
  document.body.style.overflowY = "hidden";
}

function menuclose(){
  var men = document.getElementById('fullmenu');
  men.style.height = "0vh";
  men.style.width = "0vw";
  men.style.borderBottomLeftRadius = "100%";
  document.getElementById('close').style.display = "none";
  document.getElementById('list').style.display = "none";
  document.getElementById('inlogo').style.display = "none";
  document.body.style.overflowY = "initial";
}
