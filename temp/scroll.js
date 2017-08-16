(function($) 
{          
    $(document).ready(function()
    {             
        $('#jonlee').hide();
        $('#mainNav').show();

        // Current version isn't mobile friendly yet.
        // Just redirect to old version of site.
        if($(window).width() < 550) {
            window.location.replace("../index.html");
        }

        // TODO
        // Handle mobile 
        $(window).resize(function() 
        {
            if($(window).width() < 960) {          
                console.log($(window).width());

                $('.content-portfolio').css('height', '500vh');
                // Need to tweak with this
                // $('.content-portfolio').css('margin-bottom', '20vh');
            } 
            else {
                $('.content-portfolio').css('height', '100vh');                
            }
        });

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


            $('.connect').hide();
            
            // Changes textdecoration based on position on page
            // TODO: Make the underline dynamic and animated.
            if(scrollTop >= $('.content-about').position().top - 10) {
                $('#about-item').addClass('activeNav');
                $('#portfolio-item').removeClass('activeNav');
                $('#contact-item').removeClass('activeNav');
            } 
            else {
                // Remove underline if at top of page
                $('#about-item').removeClass('activeNav');                
            }
            if(scrollTop >= $('.content-portfolio').position().top - 10) {
                $('#portfolio-item').addClass('activeNav');
                $('#about-item').removeClass('activeNav');
                $('#contact-item').removeClass('activeNav');
            }
            if(scrollTop >= $('.content-contact').position().top - 10) {
                $('#contact-item').addClass('activeNav');
                $('#about-item').removeClass('activeNav');
                $('#portfolio-item').removeClass('activeNav');
            }
            if(scrollTop >= $('.content-contact').position().top - 200) {
                $('#socialNav').fadeOut(200);                
            } 
            else {
                $('#socialNav').fadeIn(200);                
            }
        });

        $('#social').hover(
        function()
        {
            $('.connect').fadeIn(200);
        },
        function() 
        {
            $('.connect').fadeOut(200);
        });

        $('.socialIcons').hover(
        function()
        {
            $(this).addClass('animated jello');
        }, 
        function() 
        {
            $(this).removeClass('animated jello');
        });

        // Smooth Scroll Links
        $("#jonlee").click(
        function()
        {
            $('html, body')
            .animate(
            { 
                scrollTop: $('.top').offset().top 
            }, 'slow');

            // TODO:
            // Figure out how to restart this animation
            // $('#home').addClass('animated bounceInUp');  
        });

        $('#jonlee').click(
        function() 
        {
            $('#home').addClass('animated bounceInUp');
        },
        function()
        {
            $('#home').removeClass('animated bounceInUp');
        });

        $("#about-item")
        .click(function()
        {
            $('html, body')
            .animate(
            { 
                scrollTop: $('.content-about').offset().top 
            }, 'slow');
        });

        $("#portfolio-item")
        .click(function()
        {
            $('html, body')
            .animate(
            { 
                scrollTop: $('.content-portfolio').offset().top 
            }, 'slow');
        });
        
        $("#contact-item")
        .click(function()
        {
            $('html, body')
            .animate(
            { 
                scrollTop: $('.content-contact').offset().top 
            }, 'slow');
        });

        // TODO:
        // Debug div overlap
        $(".more").hide();
        var isHidden = true;
        $(".showMore").click(
        function() 
        {
            if(isHidden) {
                $(".more").slideDown();
                $(".content-portfolio").css("height", "100%");
                // Need to debug this on resize
                $(".content-portfolio").css("padding", "200px 0px");
                $(this).text('Show Less');
            }
            else {
                $(".more").slideUp();
                $(".content-portfolio").css("height", "100vh");
                $(".content-portfolio").css("padding", "0px 0px");
                $(this).text('Show More');
            }

            isHidden = !isHidden;
        });
    });
})(jQuery);
