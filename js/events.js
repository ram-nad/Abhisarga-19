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

function initialize(){
  var rules = document.getElementsByClassName('event-rules');
  for(i=0; i<rules.length; i++){
    rules[i].addEventListener('click', function(){
      this.parentElement.parentElement.getElementsByClassName('modal-rules')[0].style.display = "block";
    });
  }
  var modals = document.getElementsByClassName('modal-rules');
  for(i=0; i<modals.length; i++){
    modals[i].addEventListener('click', function(event){
      if(event.target == this){
        this.style.display = "none";
      }
    });
  }
  var closebutton = document.getElementsByClassName('modal-close');
  for(i=0; i<closebutton.length; i++){
    closebutton[i].addEventListener('click', function(){
      this.parentElement.parentElement.style.display = "none";
    });
  }
}
