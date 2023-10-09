$(document).ready(function() {
    var tenEms = Number(getComputedStyle(document.body, "").fontSize.match(/(\d*(\.\d*)?)px/)[1]) * 10;
    console.log(tenEms);
    var prev_scroll = $(window).scrollTop();

    // $('.p1-1').hide();  
    // $('.p1-2').hide();  
    // $('.p1-3').hide();  
    // $('.p1-4').hide();  

    var title_top = $('.title').offset().top;

    $(window).scroll(function() {
    
        var window_top = $(window).scrollTop();

        // scrolling down
        if (prev_scroll < $(window).scrollTop()) {
           
            if ((title_top - window_top) < 120) {
            $('.title').stop().fadeTo(500, 0);
            } 
   
            if (prev_scroll > 20*tenEms) {
            $('.p1-1').css({opacity: '1'});
            }

            if (prev_scroll > 30*tenEms) {
            $('.p1-2').css({opacity: '1'});
            }                             

            if (prev_scroll > 40*tenEms) {
            $('.p1-3').css({opacity: '1'});
            }

            if (prev_scroll > 60*tenEms) {
            $('.p1-4').css({opacity: '1'});
            }

        // scrolling up
        } else {

            if (prev_scroll < 20*tenEms) {
            $('.p1-1').css({opacity: '0'});
            }
    
             if (prev_scroll < 30*tenEms) {
            $('.p1-2').css({opacity: '0'});
            }                             
    
            if (prev_scroll < 40*tenEms) {
            $('.p1-3').css({opacity: '0'});
            }
    
            if (prev_scroll < 60*tenEms) {
            $('.p1-4').css({opacity: '0'});
            }

        }
    prev_scroll = window_top;
    });
});