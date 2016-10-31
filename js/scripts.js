$(function(){
	
	"use strict";
	
	$('.carousel').carousel({
		pause:false,
		interval:0
	});
	
	//smooth scroll
	$('.main-nav a[href*="#"]:not([href="#"])').click(function(){
		$('li .tooltip.in').css('opacity', '0');
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
	
	//scroll spy
	var topOffset = 140;
	$('body').scrollspy({
		target: 'header .main-nav',
		offset : topOffset
	});
	
	var selectedListItem = $(this).find('header ul > li.active > a').attr('href');
	if(selectedListItem !== '#main-header'){
		$('header nav.main-nav').css('position', 'fixed');
	}else{
		$('header nav.main-nav').css('position', 'absolute');
	}
		
	$('header nav.main-nav').on('activate.bs.scrollspy', function(){
		
		var selectedListItem = $(this).find('ul > li.active > a').attr('href');
		if(selectedListItem !== '#main-header'){
			$('nav.main-nav').css('opacity', '0');
			$('nav.main-nav').css('transition', 'all 1s');
			$('header nav.main-nav').css('position', 'fixed');
			$('nav.main-nav').css('opacity', '1');
			
		}else{
			$('header nav.main-nav').css('position', 'absolute');
		}
	});
	
	//enabling tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	//carousel indicators
	/*
	var carouselImgCount = $('#my-carousel .item').length;

	for(var i=0; i<carouselImgCount ;i++){
		var innerOl = '<li data-target="#my-carousel" data-slide-to="'+i+'">';
		$('#my-carousel ol').append(innerOl);		
	}
	*/
	
	//carousel img as BG
	var winHeight = $(window).height();
	$('.fullHeight').css('height', winHeight);
	
	$('.fullHeight img').each(function(){
		var imgLink = $(this).attr('src');
		$(this).parent().parent().css({
			'background-image' : 'url('+imgLink+')'
		});
		$(this).remove();
	});
	
	$(window).resize(function(){
		winHeight = $(window).height();
		$('.fullHeight').css('height', winHeight);
	});
	
});
