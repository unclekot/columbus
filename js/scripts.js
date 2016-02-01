$(document).ready(function(){


	// Initial homepage loading


	$('.homepage .hero .overlay-fadeout').delay(1000).animate({
		opacity:0,
		easing:'easeInQuint'
	},1000);


	$('.homepage .header-bar').delay(1800).animate({
		opacity:1,
		easing:'easeInQuint'
	},1000);


	$('.homepage .hero .overlay').delay(1800).animate({
		opacity:1,
		easing:'easeInQuint'
	},1000);


	// SVG loading animations

	var drawHeroText2 = new Vivus('hero-text2', {
		type: 'oneByOne',
		start: 'manual'
  	});

	drawHeroText2.stop();




	// Image fades/moves in on scroll -------------------------------------------------



	var windowheight = $(window).height();
	var windowquarter = windowheight /= 4;

	var theoffset = windowquarter *= 3;



	var windowheight2 = $(window).height();
	var windowfifth = windowheight2 /= 5;

	var theoffset2 = windowfifth *= 3;
	var theoffset100 = windowheight;


	var scrollanim = function(){




		$(".homepage #lockup-transition-1").waypoint(function(down) {

			$("#lockup-transition-1").find('.animate-movein').animate({
				top:"-=100",
				opacity:1
			},700);
			$("#lockup-transition-1").find('.animate-fadein').animate({
				opacity:1
			},2000);
		},
		{
			triggerOnce: true,
			offset: theoffset
		});




		$(".homepage #lockup-transition-2").waypoint(function(down) {

			$("#lockup-transition-2").find('.animate-movein').animate({
				top:"-=100",
				opacity:1
			},700);
			$("#lockup-transition-2").find('.animate-fadein').animate({
				opacity:1
			},2000);
		},
		{
			triggerOnce: true,
			offset: theoffset
		});



		$(".homepage #lockup-transition-4").waypoint(function(down) {
			$("#lockup-transition-4").find('.animate-movein').animate({
				top:"-=100",
				opacity:1
			});
			$("#lockup-transition-4").find('.animate-fadein').animate({
				opacity:1
			},2000);
		},
		{
			triggerOnce: true,
			offset: theoffset
		});




	}; //End of scrollanim function





	var scrollanimscripts = function(){

		var windowheight = $(window).height();
		var windowquarter = windowheight /= 4;
		var theoffset = windowquarter *= 3;



		var windowheight2 = $(window).height();
		var windowfifth = windowheight2 /= 5;

		var theoffset2 = windowfifth *= 3;



		$(".homepage #lockup-transition-3").waypoint(function(down) {

			setTimeout(function(){

				drawHeroText2.play(1.7);

			}, 800);


			$("#lockup-transition-3").find('.image-section-overlay').animate({
				opacity:0
			},1000,function(){
				$("#lockup-transition-3").find('.animate-fadein').animate({
					opacity:1
				},1000);
			});
			$("#lockup-transition-3").find('.image-section-overlay').css('z-index','0');
		},
		{
			triggerOnce: true,
			offset: theoffset2
		});


	};// end of scrollanimscripts function







	// Load this scripts no matter what;
	scrollanimscripts();




	$(window).on('resize',function(){

		if ( $(window).width() < 700  && !Modernizr.touch){

			location.reload();

		};

	});







		var animloaded = false;


	$(window).on('load resize',function(){

				if ( $(window).width() > 699 && animloaded == false ) {

					scrollanim();
					animloaded = true;

				};



	});

	var bp700Mqresize = function(){


		if (Modernizr.mq('only screen and (min-width: 700px)')) {


			console.log('over 700px');

			// Captions height controlled by height of the image

			$('.lockup-align-center').each(function(){
				var matchHeightInitial = $(this).find('.image img').height() + ('px');
				$(this).find('.caption').css('height',matchHeightInitial);
			});



			$('.lockup-align-center').each(function(){
				var matchHeight = $(this).find('.image img').height() + ('px');
				$(this).find('.caption').css('height',matchHeight);
			});





			$('.caption-first .caption').insertBefore('.caption-first .image');
			$('footer .sub-section .section-1').insertBefore('footer .sub-section .section-2');



			// Re ordering items

			$('.caption-first .caption').insertBefore('.caption-first .image');
			$('footer .sub-section .section-1').insertBefore('footer .sub-section .section-2');



		} else {

			console.log('less than 700px');

			$('.caption').css('height','auto')



			// Re ordering items back to how it was

			$('.caption-first .image').insertBefore('.caption-first .caption');
			$('footer .sub-section .section-2').insertBefore('footer .sub-section .section-1');



		}

	} // End mq stuff



	$(window).on('load resize',function(){
		bp700Mqresize();
	});


	// End Modernizr shizzzzz ------------------------------------------------------------------------


	$('.btn-search').on('mouseenter',function(){
		$(this).find('img').attr('src','img/template/icon-search-white.svg');
	});
	$('.btn-search').on('mouseleave',function(){
		$(this).find('img').attr('src','img/template/icon-search.svg');
	});


	// Smooth scroll with easing


	$(document).ready(function() {
	   $('a[href*=#]').bind('click', function(e) {
		e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump

		var target = $(this).attr("href"); //Get the target

		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body').stop().animate({ scrollTop: $(target).offset().top }, {duration:2000,easing:'easeOutExpo'}, function() {
		     location.hash = target;  //attach the hash (#jumptarget) to the pageurl
		});

		return false;
	   });
	});



	// Mobile nav menu toggle

	$('.header-toggle .open').on('click',function(){
		$('.menu-dropdown').slideDown(300);
		$(this).fadeOut(100);
		$('.header-toggle .close').fadeIn(100);
	});

	$('.header-toggle .close').on('click',function(){
		$('.menu-dropdown').slideUp(300);
		$(this).fadeOut(100);
		$('.header-toggle .open').fadeIn(100);
	});


	var winheight = $(window).height();

});
