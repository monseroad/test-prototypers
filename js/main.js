//MENÚ
$(window).load(function() {
  $(".btn-nav").on("click tap", function() {
    $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
    $(this).toggleClass("animated");
  });
});

//SMOOVE

//SMOOVE SECCION 2 
$(document).ready(function(){
  $(".foto-dos-cuatro").smoove({ //FOTO 2 y 4
    offset  : '10%',
    moveX   : '100px',
    moveY   : '100px',

  });  

//SMOOVE SECCION 5
$(".skew, .bar").smoove({
    skew : '1%',
    moveX   : '2px',
    moveY   : '3px',
    moveZ   : '0.5',
   }); 
 });



//SLIDE
$(function() {
      $('#slides').superslides({
        hashchange: true
      });
    });

//FOTOS
$(document).ready(function(){
	$("#opacidad").click(function(e){				
		//Código de cambio de opacidad		
	});	
});

