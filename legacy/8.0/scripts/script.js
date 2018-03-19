$(document).ready(
function() 
{
    // var bgArray = ['hae.JPG', 'images/banner.png', 'images/gpupt/sample.png'];
    // var bg = bgArray[Math.floor(Math.random() * bgArray.length)];

    // $('body').css('background', bg);

    // // If you have defined a path for the images
    // // var path = 'images/bg/';

    // // then you can put it right before the variable 'bg'
    // $('body').css('background', bg);

    // $('html').addClass('animated fadeInRight');

    $('#jonlee').addClass('animated fadeInUp');
    $('#eng').addClass('animated fadeInDown');

    // $('#projectlink').click(
    //     function(e)
    //     {
    //         e.preventDefault();
    //         $('html').addClass('animated fadeOutDownBig');

    //         window.location.href = "portfolio.html";
    //         return false;
    //     }
    // );

    $('#demoreel').click(
        function(e)
        {
            e.preventDefault();

            // window.location.href = "https://vimeo.com/189623959";
            return false;
        }
    );
}); 