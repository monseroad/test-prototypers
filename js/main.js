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

  $(".foto-tres").smoove({ //FOTO 3
    offset  : '10%',
    moveX   : '50px',
    moveY   : '250px',

  });  

//SMOOVE SECCION 5
$(".foo, .bar").smoove({
    skew  : '50%',
    moveX   : '100px',
    moveY   : '100px',
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

