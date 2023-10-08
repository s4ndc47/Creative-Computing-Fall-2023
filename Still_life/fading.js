$(document).ready(function() {
    var tenEms = Number(getComputedStyle(document.body, "").fontSize.match(/(\d*(\.\d*)?)px/)[1]) * 10;
    console.log(tenEms);
    var prev_scroll = $(window).scrollTop();

    $('.p1-1text').hide();     // p1
    $('.p1-2text').hide();  
    $('#img1-1').hide();     
    $('#img1-2').hide();    
  
    var title_top = $('.title').offset().top;

    $(window).scroll(function() {
    
        var window_top = $(window).scrollTop();

        // scrolling down
        if (prev_scroll < $(window).scrollTop()) {
           
            if ((title_top - window_top) < 300) {
            $('.title').stop().fadeTo(500, 0);
            } 

            if (prev_scroll > 4.5 * tenEms) {
                $(".p1-1text").fadeIn();
            }
            if (prev_scroll > 4.5 * tenEms) {
                $("#img1-1").fadeIn();
            }
            

         
         // scrolling up
         } else {

             if (prev_scroll < 300) {                            
                 $('.title').stop().fadeTo('fast', 1)
              }

             if (prev_scroll < 4.5*tenEms) {                             
               $(".p1-1text").fadeOut();
              }

             if (prev_scroll < 4.5*tenEms) {                              
               $("#img1-1").fadeOut();
              }

        }
    prev_scroll = window_top;
    });
});