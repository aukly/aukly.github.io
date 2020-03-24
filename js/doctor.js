$(function(){
	$(window).scroll(function()
	{
		if($(this).scrollTop() > 300)
		{
			$('.scrolltoTop').fadeIn();
		}
		else 
		{
			$('.scrolltoTop').fadeOut();
		}
	});
	$('.scrolltoTop').click(function()
	{
		$('html, body').animate({scrollTop : 0}, 800);
		$('.scrolltoTop').hover = false;
		return false;
	});

	baguetteBox.run('.gallery');

})
