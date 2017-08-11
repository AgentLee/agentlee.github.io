// Nav bar scroll
(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('nav').fadeIn(500);
            } else {
                $('nav').fadeOut(500);
            }
        });
    });
})(jQuery);

// Scrolll from landing to about
$("button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

