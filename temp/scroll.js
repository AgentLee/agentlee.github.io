(function($) 
{          
    $(document).ready(function()
    {             
        $('#jonlee').hide();
        $('#mainNav').show();

        // Nav bar scroll
        // TODO: Use just one nav   
        // BUG: It like jitters after scrolling down.    
        $(window).scroll(function()
        {        
            var scrollTop   = $(this).scrollTop();
            var height      = .75 * $(window).height();

            if(scrollTop > height) {
                $('#jonlee').fadeIn(500);
            } 
            else {
                $('#jonlee').fadeOut(200);
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

        // Smooth Scroll Links
        $('a[href^="#"]').on('click', 
        function(e) 
        {
            e.preventDefault();

            var target  = this.hash;
            var $target = $(target);

            // Scroll and show hash
            $('html, body')
            .animate(
            {
                'scrollTop' : $target.offset().top 
            }, 
                1000, 'swing',
            function()
            {
                window.location.hash = target;
            });
        });
    });
})(jQuery);

// Scroll from landing to about
// $("button").click(function() {
//     $('html,body').animate({
//         scrollTop: $("#about").offset().top},
//         'slow');
// });

