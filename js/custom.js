/* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(1000);
    });
window.onload=function(){
	$('.circleGraphic1').circleGraphic({'color':'#30bae7'});
	$('.circleGraphic2').circleGraphic({'color':'#d74680'});
	$('.circleGraphic3').circleGraphic({'color':'#15c7a8'});
    $('.circleGraphic4').circleGraphic({'color':'#eb7d4b'});

}
 // scroll-to-top 
 $(function () {
     $(window).scroll(function () {
         if ($(this).scrollTop() >100) {
             $('.scrollup').fadeIn();
         } else {
             $('.scrollup').fadeOut();
         }
     });

     $('.scrollup').click(function () {
         $("html, body").animate({
             scrollTop: 0
         }, 600);
         return false;
     });

 });

//menu height
 $(function () {
     var topoffset =0; //variable for menu height

     //Use smooth scrolling when clicking on navigation
     $('.navbar-nav a').click(function () {
         if (location.pathname.replace(/^\//, '') ===
             this.pathname.replace(/^\//, '') &&
             location.hostname === this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top - topoffset
                 }, 500);
                 return false;
             } //target.length
         } //click function
     }); //smooth scrolling
    });  


/*--------------------------------
 	10. Navbar Background Change
----------------------------------*/
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 400) {
        $(".navbar").css({
            "background": "rgba(135,80,156, .8)",
            "transition": ".7s"
        });
    } else {
        $(".navbar").css("background", "transparent");
    }

    if (scroll > 480) {
        $(".navbar-blog").css({
            "background": "rgba(255,212,85, .8)",
            "transition": ".7s"
        });
    } else {
        $(".navbar-blog").css("background", "transparent");
    }

});





 