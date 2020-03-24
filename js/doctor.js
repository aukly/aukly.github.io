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

	var target_block = $(".section-feature"); // Ищем блок 
	var blockStatus = true;
	
	$(window).scroll(function()
	{
		var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
		if(scrollEvent && blockStatus) 
		{
			blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
			$({numberValue: 0}).animate({numberValue: 2400},
			{
				duration: 5000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
				easing: "linear",
				step: function(val)
				{
					$(".numbers1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				}
			});
			$({numberValue: 0}).animate({numberValue: 37},{duration: 3500,easing: "linear",step: function(val){$(".numbers2").html(Math.ceil(val));}});
			$({numberValue: 0}).animate({numberValue: 150},{duration: 4000,easing: "linear",step: function(val){$(".numbers3").html(Math.ceil(val));}});
			$({numberValue: 0}).animate({numberValue: 230},{duration: 4500,easing: "linear",step: function(val){$(".numbers4").html(Math.ceil(val));}});
		}
	});

})
