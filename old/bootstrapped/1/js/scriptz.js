$( document ).ready(function() {
    $('.glyphicon-film').addClass('animated fadeInRightBig');
    sleep(1000);
    $('.glyphicon-pencil').addClass('animated fadeInRightBig');
    sleep(1000);
    $('.glyphicon-console').addClass('animated fadeInRightBig');

    /*
   	$('.glyphicon-pencil').delay(100).queue(function(){
   		$(this).addClass('animated fadeInRightBig').clearQueue();
   	});

	$('.glyphicon-console').delay(150).queue(function(){
   		$(this).addClass('animated fadeInRightBig').clearQueue();
   	});
	*/
});

