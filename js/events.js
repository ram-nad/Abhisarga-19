selected = 0;

function changecontent(){
  list = document.getElementById('listnav').getElementsByTagName('li');
  events = document.getElementsByClassName('events-internal');
  list[selected].classList.remove("active-link");
  events[selected] .style.display = "none";
  selected = parseInt(document.getElementById('eventselect').value);
  list[selected].classList.add("active-link");
  events[selected].style.display = "block";
}

function changeselect(param){
  document.getElementById('eventselect').value = param.value;
  changecontent();
}
