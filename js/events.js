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
  var register = document.getElementsByClassName('event-register');
  for(i=0; i<register.length; i++){
    register[i].addEventListener('click', function(){
      this.parentElement.parentElement.getElementsByClassName('modal-register')[0].style.display = "block";
    });
  }
  var modals = document.getElementsByClassName('modal');
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
  var checkbox = document.getElementsByClassName('register-checkbox');
  for(i=0; i<checkbox.length; i++){
    checkbox[i].addEventListener('click', function(){
      var actual = this.parentElement.parentElement.getElementsByClassName('register-agree')[0];
      if(actual.checked == true){
        actual.checked = false;
        this.style.color = "rgba(0,0,0,0)";
      }else{
        actual.checked = true;
        this.style.color = "rgba(255,255,255,1)";
      }
    });
  }
}
