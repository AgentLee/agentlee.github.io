// Nav bar scroll
(function($) 
{          
    $(document).ready(function()
    {             
        $('#socialNav').hide();
        $('#jonlee').hide();
        $('#mainNav').show();

        // TODO: Use just one nav   
        // BUG: It like jitters after scrolling down.    
        $(window).scroll(function()
        {        
            var scrollTop = $(this).scrollTop();

            // console.log(3 * $(window).height() / 4);
            // console.log(.75 * $(window).height());

            var height = .75 * $(window).height();

            if(scrollTop > height) {
                $('#jonlee').fadeIn(500);
                // $('#socialNav').fadeIn(500);
                // $('#landingNav').fadeOut(250);
            } 
            else {
                $('#jonlee').fadeOut(200);
                // $('#socialNav').fadeOut(500);
                // $('#landingNav').fadeIn(500);
            }

            // Changes textdecoration based on position on page
            // TODO: Make the underline dynamic and animated.
            if(scrollTop >= $('#about').position().top) {
                $('#about-item').addClass('activeNav');
                $('#portfolio-item').removeClass('activeNav');
                $('#contact-item').removeClass('activeNav');
            } 
            else {
                // Remove underline if at top of page
                $('#about-item').removeClass('activeNav');                
            }
            if(scrollTop >= $('#portfolio').position().top) {
                $('#portfolio-item').addClass('activeNav');
                $('#about-item').removeClass('activeNav');
                $('#contact-item').removeClass('activeNav');
            }
            if(scrollTop >= $('#contact').position().top) {
                $('#contact-item').addClass('activeNav');
                $('#about-item').removeClass('activeNav');
                $('#portfolio-item').removeClass('activeNav');
            }
            if(scrollTop >= $('#contact').position().top - 150) {
                $('#landingNav').fadeOut(200);                
            } 
            else {
                $('#landingNav').fadeIn(200);                
            }
        });
    });
})(jQuery);

// Scroll from landing to about
// $("button").click(function() {
//     $('html,body').animate({
//         scrollTop: $("#about").offset().top},
//         'slow');
// });

