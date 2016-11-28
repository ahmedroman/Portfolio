$(function(){
	
	var winHeight = $(window).height();
	
	
	$('.carousel .item img').click(function(){
		var thisImg = $(this).attr('src');
		$('.showImg').addClass('display-block');
		$('.img-header').addClass('display-block');
		$('.showImg >.full-img').attr('src', thisImg);
		$('body').addClass('overflowHidden');
		
		$('.img-header').fadeIn('slow',function(){
			$('.img-close').addClass('img-close-anim');
			$('.img-header').addClass('img-header-anim');
			$('.showImg >img.full-img').addClass('modal-img-anim');
		});
		
	});
	$('.img-close').click(function(){
		$('.showImg').removeClass('display-block');
		$('.img-header').removeClass('display-block');
		$('body').removeClass('overflowHidden');
		$('.img-close').removeClass('img-close-anim');
		
		$('.img-header').fadeOut('slow',function(){
			$('.img-close').removeClass('img-close-anim');
			$('.img-header').removeClass('img-header-anim');
			$('.showImg >img.full-img').removeClass('modal-img-anim');
		});
		
		
		
		return false;
	});
	
	var workPosition = $('#recent-work').offset().top;
	var aboutStartPosition = $('.about').offset().top;
	
	var aboutEndPosition = $('.about').offset().top + $('.about').outerHeight();
	
	
	$(window).scroll(function(){
		
		if ($(window).scrollTop() > $(window).height() ) {
			$('.head span.header-bg').addClass('display-none');
			$('footer').addClass('display-block');
		}else{
			$('.head span.header-bg').removeClass('display-none');
			$('footer').removeClass('display-block');
		}
		
		if ($(window).scrollTop() >= workPosition) {
			$('body').removeClass('overflow');
			$('.menu-icon').addClass('menu-icon-position-fixed');			
		}else{
			$('.menu-icon').removeClass('menu-icon-position-fixed');			
		}
		if (($(window).scrollTop() >= (aboutStartPosition+230)) &&
			($(window).scrollTop()+ $(window).height()  <= (aboutEndPosition+230))){
			$('.left-about-area').addClass('about-position-fixed');
			
		}else{
			$('.left-about-area').removeClass('about-position-fixed');
		}

	});
	
	var delay = 2.5;
	$('.left-header p span.col').each(function(){
		var delayInSec = delay + 's';
		$(this).css('animation-delay', delayInSec);
		delay += .3;
	});
	
	
	
	/*
	$('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
	*/
	$('body').addClass('overflow');	
		
	$('.scoll-down-btn').click(function(){
	});
	
	$('.menu-cross-icon').click(function(){
		$(this).css('visibility', 'hidden');
		$('.menu-icon').css('visibility', 'visible');
		$('.main-menu').removeClass('main-menu-visible');
		$('.menu-cross-icon').removeClass('cross-anim');
	});
	$('.menu-icon').click(function(){
		$(this).css('visibility', 'hidden');
		$('.menu-cross-icon').css('visibility', 'visible');
		$('.main-menu').addClass('main-menu-visible');
		$('.menu-cross-icon').addClass('cross-anim');
	});
	
	var menuContainer = $('#main-menu-id');
	var menuIconContainer = $('#menu-icon-id');	
	
	$(document).click(function(e){
		if($('.main-menu').hasClass('main-menu-visible') &&  (!menuIconContainer.is(e.target)) &&
			(menuIconContainer.has(e.target).length === 0) &&
			(!menuContainer.is(e.target)) && menuContainer.has(e.target).length === 0){
				hidingTheMenu();
		}
	});
	function hidingTheMenu(){
		$('.main-menu').removeClass('main-menu-visible');
		$('.menu-icon').css('visibility', 'visible');
		$('.menu-cross-icon').removeClass('cross-anim');
	}
	//inside menu click attributes
	$('#main-menu-id .list-unstyled a').click(hidingTheMenu);
	
	
	$('header').css('height' ,winHeight );
	
	$('footer').css('height' ,winHeight );
	$('.footer-front').css('height' ,winHeight );
	
	$(window).resize(function(){
		winHeight = $(window).height();
		$('header').css('height' ,winHeight );
		$('footer').css('height' ,winHeight );
	});
	
	$('.work1-mobile').hover(
		function(){
			$(this).parent().addClass('work-mobile-anim');
		},
		function(){
			$(this).parent().removeClass('work-mobile-anim');
		}
	);
	
	$('.work1').hover(
		function(){
			$(this).parent().addClass('work-anim');
		},
		function(){
			$(this).parent().removeClass('work-anim');
		}
	);
	
	$('header a[href*="#"]:not([href="#"])').click(function(){
		if(location.pathname.replace(/^\//, '')==
			this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name='+ this.hash.Slice(1) +']');
			if(target.length){
				$('html,body').animate({
					scrollTop: target.offset().top,	
				}, 500);
				return false;
			}
		}
		
	});
	
});
