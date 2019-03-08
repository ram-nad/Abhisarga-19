function closemodal(num){
  var modal = document.getElementsByClassName('accomodation-modal')[num];
  modal.style.display = "none";
}

function openmodal(num){
  var modal = document.getElementsByClassName('accomodation-modal')[num];
  modal.style.display = "block";
}

function initialize(){
  var modals = document.getElementsByClassName('accomodation-modal');
  for(i=0; i<modals.length; i++){
    modals[i].addEventListener('click', function(event){
      if(event.target == this){
        this.style.display = "none";
      }
    });
  }
}
