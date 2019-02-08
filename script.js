var scrollload = false;

function initialize(){
  update_time();
  typewriter();
  window.addEventListener("scroll", function(){
    if(!scrollload){
      slidein();
    }
  });
  slidein();
}

function update_time(){
    var calcNewYear = setInterval(function(){
    date_now = new Date();
    date_future = new Date(date_now.getFullYear(), 2, 29);

    seconds = Math.floor((date_future - (date_now))/1000);
    minutes = Math.floor(seconds/60);
    hours = Math.floor(minutes/60);
    days = Math.floor(hours/24);

    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

    day_section = document.getElementById('timer_day');
    hour_section = document.getElementById('timer_hour');
    minute_section = document.getElementById('timer_minute');
    second_section = document.getElementById('timer_second');

    day_section.innerHTML = days;
    hour_section.innerHTML = hours;
    minute_section.innerHTML = minutes;
    second_section.innerHTML = seconds;
  },1000);
}
function typewriter(){
  var caption = document.getElementById("caption");
  var text = "CELEBRATION BEGINS IN  ";
  var texti = 0;
  var textadd = function(){
    if(texti < text.length){
      caption.innerHTML = text.slice(0,texti)+'_';
      texti++;
      setTimeout(textadd,250);
    }
    else{
      if(caption.innerHTML == "CELEBRATION BEGINS IN _"){
        caption.innerHTML = "CELEBRATION BEGINS IN &nbsp;&nbsp;"
      }
      else{
        caption.innerHTML = "CELEBRATION BEGINS IN _"
      }
      setTimeout(textadd,500);
    }
  }
  textadd();
}
function slidein(){
  var el = document.getElementById('embed');
  var ypos = el.offsetTop - document.documentElement.scrollTop;
  if(ypos < window.innerHeight && (ypos+el.offsetHeight/2) < window.innerHeight){
      document.getElementById('youtube').style.right = "0%";
      document.getElementById('youtube').style.opacity = "1";
      document.getElementById('rewind-text').style.left = "0";
      document.getElementById('rewind-text').style.opacity = "1";
      scrollload = true;
  }
}
