const toggleButton = $(".toggle-button");
const navlist = $("#navlist")[0];

toggleButton.on('click', () => {
    $("#navlist").toggleClass('active')
    $(".btn-click").toggleClass('active')
    $(".right").addClass('active')
    $(".allblur").addClass('blur')
    $("#btn-wallet").addClass('hide')
    $(".toggle-button").addClass('click')
    $("#navbar").addClass('index')
    $(".toggle-button").addClass('hide')
    $(".toggle-menu-btn").addClass('show')
})

$(".cross").on('click', () =>{
    $(".right").removeClass('active')
    $(".allblur").removeClass('blur')
    

    $("#navlist").removeClass('active')
    $(".btn-click").removeClass('active')
    $("#btn-wallet").removeClass('hide')
    $(".toggle-button").removeClass('click')
    $("#navbar").removeClass('index')
    $(".toggle-button").removeClass('hide')
    $(".toggle-menu-btn").removeClass('show')
})

function scrolled () {
    const navElement = $('#navbar');
    var scroll = $(window).scrollTop();
    if (scroll > 0){
        navElement.css('background-color', 'rgba(105,105,105, 0.6)')
        $('#navbar').addClass('navblur');
        
    }else if(scroll === 0){
        navElement.css('background-color', 'transparent')
    }
}

window.addEventListener("scroll", scrolled , false);

var x = 1;

$('.plus').on("click", () =>{
    x++;
     $(".inpute").val(x);
})

$('.moins').on("click", () =>{
    x--;
     if(x < 1){
        x = 1;
        $(".inpute").val(x);
     }
     $(".inpute").val(x);
})

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = 6;

$('.slide').on('click', () => {
  a--;
  b--;
  c--;
  d--;
  e--;
  f--;
  if(a < 1){
    a = 6
  } if(b < 1){
    b = 6
  } if(c < 1){
    c = 6
  } if(d < 1){
    d = 6
  } if(e < 1){
    e = 6
  } if(f < 1){
    f = 6
  }
    $('.one').css('grid-row', '1 / 6');
    $('.two').css('grid-row', '1 /' + b);
    $('.three').css('grid-row', '1 /' + c);
    $('.four').css('grid-row', '1 /' + d);
    $('.five').css('grid-row', '1 /' + e);
    $('.six').css('grid-row', '1 /' + f);

})



const date = '10/30/2022 10:1 AM';

CountDownJour(date, 'jour');
CountDownHeure(date, 'heure');
CountDownMinute(date, 'minute');
CountDownSeconde(date, 'seconde');

function CountDownJour(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);

        if(days < 10){
            document.getElementById(id).innerHTML = "0" + days;

        }else {
            document.getElementById(id).innerHTML = days;
        }
    }

    timer = setInterval(showRemaining, 1000);
}



function CountDownHeure(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var hours = Math.floor((distance % _day) / _hour);

        if(hours < 10){
            document.getElementById(id).innerHTML = "0" + hours;

        }else {
            document.getElementById(id).innerHTML = hours;
        }
    }

    timer = setInterval(showRemaining, 1000);
}





function CountDownMinute(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        
        var minutes = Math.floor((distance % _hour) / _minute);
       
        if(minutes < 10){
            document.getElementById(id).innerHTML = "0" + minutes;

        }else {
            document.getElementById(id).innerHTML = minutes;
        }
        
    }

    timer = setInterval(showRemaining, 1000);
}




function CountDownSeconde(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var seconds = Math.floor((distance % _minute) / _second);

        if(seconds < 10){
            document.getElementById(id).innerHTML = "0" + seconds;

        }else {
            document.getElementById(id).innerHTML = seconds;
        }
        
    }

    timer = setInterval(showRemaining, 1000);
}

