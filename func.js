$(function(){
  var start =100;
  var shrinkHeader = 150;
  var addBlue=250;
  var addRed=1000;
  var addYellow=1500;

  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader  ) {
         $('.header').addClass('shrink');
        }
        else  {
           $('.header').removeClass('shrink');
        }
    if ( scroll >= addBlue  ) {
         //$('div.b').show();
         $('div.b').addClass('blue');
        }
        else  {
           $('div.b').removeClass('blue');
           //$('div.b').hide();
        }
    if ( scroll >= addRed  ) {
         //$('div.c').show();
         $('div.c').addClass('red');
        }
        else  {
           $('div.c').removeClass('red');
           //$('div.c').hide();
        }
    if ( scroll >= addYellow  ) {
         //$('div.d').show();
         $('div.d').addClass('yellow');
        }
        else  {
           $('div.d').removeClass('yellow');
          // $('div.d').hide();
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
   $('header').hide();
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
