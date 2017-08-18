(function($) 
{          
    $(document).ready(function()
    {             
        // Hide my name on load for the landing page.
        // If the user scrolls past the first section, then my name
        // will fade in and become clickable (top).
        var scrollTop   = $(this).scrollTop();
        if(scrollTop >= $('.content-about').position().top - 10) {
            $('#jonlee').show();
        }
        else {
            $('#jonlee').hide();            
        }

        $('#mainNav').show();
        // Hide a bunch of cool jQuery items so they can be triggered later on.
        $(".moreTypography").hide();        // Show more section in portfolio
        $(".moreBuzz").hide();        
        $('.connect').hide();               // Social media navigation bar
        $('#connect-emailMe').hide();
        $('#connect-github').hide();
        $('#connect-linkedin').hide();
        $('#connect-youtube').hide();
        $('#connect-vimeo').hide();
        $('#connect-500px').hide();
        $('.clickBlog').hide();

        // Current version isn't mobile friendly yet.
        // Just redirect to old version of site.
        if($(window).width() < 700) {
            window.location.replace("mobile.html");
        }

        // Profile image is way too large on smaller screens
        if($(window).width() < 1100) {
            $('#profile-img').css('height', '25%');
            $('#profile-img').css('width', '25%');
        }

        // TODO
        // Handle mobile 
        // $(window).resize(function() 
        // {
        //     if($(window).width() < 960) {          
        //         console.log($(window).width());

        //         $('.content-portfolio').css('height', '500vh');
        //         // Need to tweak with this
        //         // $('.content-portfolio').css('margin-bottom', '20vh');
        //     } 
        //     else {
        //         $('.content-portfolio').css('height', '100vh');                
        //     }
        // });

        // ----------------------------------------------------------------------------------
        // Various scroll functions 
        // ----------------------------------------------------------------------------------
        //      - Navigation item gets underlined when it gets to its respective section
        //      - Name fades in/out after scrolling down/up past/to the landing page.
        //      - Smooth scrolling animation to sections when clicking on navigation items.    
        $(window).scroll(
        function()
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
            
            // Detect bottom of page
            // Footer fades in/out based on this.
            if(scrollTop + $(window).height()== $(document).height()) {
                $('footer').fadeIn(700);
            }
            else {
                $('footer').fadeOut(200);
            }
        });

        // --------------------------------------------------------
        // Social navigation hover effects 
        // --------------------------------------------------------
        // "Connect with Me" slides up/down when the user
        // hovers over the div. If they hover over an icon
        // the next set of functions get triggered.
        $('#social').hover(
        function()
        {
            $('.connect').slideDown();
        },
        // This function handles when the user goes off the div.
        function() 
        {
            $('.connect').slideUp();
        });

        // Depending on which icon the user hover overs
        // different text appears for it. 
        $('.socialIcons').hover(
        function()
        {
            $(this).addClass('animated jello');

            if($(this).attr('id') == 'email') {
                $('#connect-emailMe').slideDown();
            }

            if($(this).attr('id') == 'github') {
                $('#connect-github').slideDown();
            }
            
            if($(this).attr('id') == 'linkedin') {
                $('#connect-linkedin').slideDown();
            }

            if($(this).attr('id') == 'youtube') {
                $('#connect-youtube').slideDown();
            }

            if($(this).attr('id') == 'vimeo') {
                $('#connect-vimeo').slideDown();
            }

            if($(this).attr('id') == 'px500') {
                $('#connect-500px').slideDown();
            }
        }, 
        // This function handles when the user goes off the icon.
        function() 
        {
            $(this).removeClass('animated jello');

            if($(this).attr('id') == 'email') {
                $('#connect-emailMe').slideUp();
            }

            if($(this).attr('id') == 'github') {
                $('#connect-github').slideUp();
            }

            if($(this).attr('id') == 'linkedin') {
                $('#connect-linkedin').slideUp();
            }

            if($(this).attr('id') == 'youtube') {
                $('#connect-youtube').slideUp();
            }

            if($(this).attr('id') == 'vimeo') {
                $('#connect-vimeo').slideUp();
            }

            if($(this).attr('id') == 'px500') {
                $('#connect-500px').slideUp();
            }
        });

        // ----------------------------------------------
        // Smooth Scroll Links 
        // ----------------------------------------------
        // When the user clicks on an navigation item
        // the page brings them to it smoothly.
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
            $('#home').addClass('animated bounceInUp');  
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
        
        $(".projectTitle").hover(
        function()
        {
            $('#link').css('opacity', '0.0');
            $('.clickBlog').fadeIn(200);
        },
        function()
        {
            $('#link').css('opacity', '1.0');
            $('.clickBlog').fadeOut(200);
        });

        // ----------------------------
        // Portfolio show more option 
        // ----------------------------
        var typographyHidden = true;
        $(".showMoreTypography").click(
        function() 
        {
            // Shows the content
            if(typographyHidden) {
                // If this is shown then collapse it
                if(!buzzHidden) {
                    $(".moreBuzz").slideUp();
                    buzzHidden = !buzzHidden;
                }

                $(".moreTypography").slideDown();
            }
            // Brings content up
            else {
                $(".moreTypography").slideUp();
            }

            // Swap bool values
            typographyHidden = !typographyHidden;
        });

        var buzzHidden = true;
        $(".showMoreBuzz").click(
        function() 
        {

            // Shows the content
            if(buzzHidden) {
                // If this is shown then collapse it
                if(!typographyHidden) {
                    $(".moreTypography").slideUp();
                    typographyHidden = !typographyHidden;
                }

                $(".moreBuzz").slideDown();
            }
            // Brings content up
            else {
                $(".moreBuzz").slideUp();
            }

            // Swap bool values
            buzzHidden = !buzzHidden;
        });
    });
})(jQuery);
