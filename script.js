function initialize(){
  update_time();
  modal();
}

function update_time(){
    var calcNewYear = setInterval(function(){
    date_now = new Date();
    date_future = new Date(date_now.getFullYear(), 2, 22);

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

function modal(){
    var modal = document.getElementById("showmap");
    var btn = document.getElementById("map");
    var span = document.getElementById("modal-close");
    btn.addEventListener("click", function() {
        modal.style.display = "block";
    });
    span.addEventListener("click", function() {
        modal.style.display = "none";
    });
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
