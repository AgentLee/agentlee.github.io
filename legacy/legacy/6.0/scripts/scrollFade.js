$(document).read(function(){
	$(window).scroll(function(){
		$('.hideme').each(function(i){
			var objBottom = $(this).offset().top + $(this).outerHeight();
			var winBottom = $(window).scrollTop() + $(window).height();

			if(winBottom > objBottom) {
				$(this).animate({'opacity':'1'}, 500);
			}
		});
	});
});