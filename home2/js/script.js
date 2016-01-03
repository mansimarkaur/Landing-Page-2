$(document).ready(function(e) {
	$('.with-hover-text, .regular-link').click(function(e){
		e.stopPropagation();
	});
	$('.with-hover-text').hover(
		function(e) {
			$(this).css('overflow', 'visible');
			$(this).find('.hover-text')
				.show()
				.css('opacity', 0)
				.delay(200)
				.animate(
					{
						paddingTop: '25px',
						opacity: 1
					},
					'fast',
					'linear'
				);
		},
		function(e) {
			var obj = $(this);
			$(this).find('.hover-text')
				.animate(
					{
						paddingTop: '0',
						opacity: 0
					},
					'fast',
					'linear',
					function() {
						$(this).hide();
						$( obj ).css('overflow', 'hidden');
					}
				);
		}
	);

	$(function(){
		var pause = 10;
		$(document).scroll(function(e){
			delay(function(){
				var tops = [];
				$('.story').each(function(index, element){
					tops.push( $(element).offset().top - 200 );
				});
				var scroll_top = $(this).scrollTop();
				var lis = $('.nav > li');
				for ( var i=tops.length; i>=0; i-- ){
					if ( scroll_top >= tops[i] ){
						menu_focus( lis[i], i );
						break;
					}
				}
			}, pause);
		});
	$(document).scroll();
	});
});

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

function menu_focus( element, i ) {
	if ( $(element).hasClass('active') ) {
		if ( i == 6 ) {
			if ( $('.navbar').hasClass('inv') == false )
				return;
		} else {
			return;
		}
	}

	enable_arrows( i );

	if ( i == 1 || i == 6 )
		$('.navbar').removeClass('inv');
	else
		$('.navbar').addClass('inv');

	$('.nav > li').removeClass('active');
	$(element).addClass('active');

	var fa = $(element).find('.fa');

	var left_pos = fa.offset().left - $('.nav').offset().left;
	var el_width = fa.width() + $(element).find('.text').width() + 10;

	$('.active-menu').stop(false, false).animate(
		{
			left: left_pos,
			width: el_width
		},
		1500,
		'easeInOutQuart'
	);
}

function enable_arrows( dataslide ) {
	$('#arrows div').addClass('disabled');
	if ( dataslide != 0 ) {
		$('#arrow-up').removeClass('disabled');
	}
	if ( dataslide != 6 ) {
		$('#arrow-down').removeClass('disabled');
	}
}

jQuery(document).ready(function ($) {
	//Cache some variables
	var links = $('.nav').find('li');
	slide = $('.slide');
	button = $('.button');
	mywindow = $(window);
	htmlbody = $('html,body');

	function goToByScroll(dataslide) {
		var offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top;

		htmlbody.stop(false, false).animate({
			scrollTop: offset_top
		}, 1500, 'easeInOutQuart');
	}

	links.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		$(".nav-collapse").collapse('hide');
	});

	$('.navigation-slide').click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		$(".nav-collapse").collapse('hide');
	});
});

jQuery(document).ready(function ($) {
	var menu_item = $('.nav').find('li');

	menu_item.hover(
		function(e) {
			var fa = $(this).find('.fa');

			var left_pos = fa.offset().left - $('.nav').offset().left;
			var el_width = fa.width() + $(this).find('.text').width() + 10;

			var hover_bar = $('<div class="active-menu special-active-menu"></div>')
				.css('left', left_pos)
				.css('width', el_width)
				.attr('id', 'special-active-menu-' + $(this).data('slide') );

			$('.active-menu').after( hover_bar );
		},
		function(e) {
			$('.special-active-menu').remove();
		}
	);
});

jQuery(document).ready(function ($) {
	var images = $('.hov-img a');

	images.hover(
		function(e) {
			var asta = $(this).find('img');
			$('img').not( asta ).stop(false, false).animate(
				{
					opacity: .5
				},
				'fast',
				'linear'
			);
			var zoom = $('<div class="zoom"></div>');
			if ( $(this).hasClass('video') ) {
				zoom.addClass('video');
			}
			$(this).prepend(zoom);
		},
		function(e) {
			$('img').stop(false, false).animate(
				{
					opacity: 1
				},
				'fast',
				'linear'
			);
			$('.zoom').remove();
		}
	);
});

jQuery(document).ready(function ($) {
	var arrows = $('#arrows div');

	arrows.click(function(e) {
		e.preventDefault();

		if ( $(this).hasClass('disabled') )
			return;

		var slide = null;
		var datasheet = $('.nav > li.active').data('slide');
		var offset_top = false;
		var offset_left = false;


		switch( $(this).attr('id') ) {
			case 'arrow-up':
				offset_top = ( datasheet - 1 == 1 ) ? '0px' : $('.slide[data-slide="' + (datasheet-1) + '"]').offset().top;
				break;
			case 'arrow-down':
				offset_top = $('.slide[data-slide="' + (datasheet+1) + '"]').offset().top;
				break;
		}

		if ( offset_top != false ) {
			htmlbody.stop(false, false).animate({
				scrollTop: offset_top
			}, 1500, 'easeInOutQuart');
		}

		if ( offset_left != false ) {
			if ( $('#slide-3 .row').width() != $('body').width() ) {
				$('#slide-3 .row').stop(false, false).animate({
					left: offset_left
				}, 1500, 'easeInOutQuart');
			}
		}
	});
});

function codeAddress() {
	var x = new XMLHttpRequest();
	x.open("GET", "http://zakimonkey.com/test5.php?key=97724fe69733fdbf16bfd18725b2531e", true);
	x.onreadystatechange = function () {
	if (x.readyState == 4 && x.status == 200) {
    	var doc = x.responseXML;
		for (var i = 0; i<6; i++) {
        	var idd = "upd"+i;
	    	var title = doc.getElementsByTagName("channel")[0].getElementsByTagName("item")[i].getElementsByTagName("title")[0].firstChild.nodeValue;
	    	var link = doc.getElementsByTagName("channel")[0].getElementsByTagName("item")[i].getElementsByTagName("link")[0].firstChild.nodeValue;
	    	var pubdate = doc.getElementsByTagName("channel")[0].getElementsByTagName("item")[i].getElementsByTagName("pubDate")[0].firstChild.nodeValue;
        	document.getElementById(idd).innerHTML = "<span class=\"col-lg-12 picTitle\"><a href=\""+link+"\">"+title+"</a> <a><span class=\"fa fa-info-circle\"></span></a></span>";
    	};
	}
	};
	x.send(null);
	var y = new XMLHttpRequest();
	y.open("GET", "http://zakimonkey.com/test5.php?key=87ee709a5c38bdbdb52638dd708dcf3f", true);
	y.onreadystatechange = function () {
	if (y.readyState == 4 && y.status == 200) {
    	var doc = y.responseXML;
		for (var i = 0; i<3; i++) {
        	var idd = "prac"+i;
	    	var title = doc.getElementsByTagName("channel")[0].getElementsByTagName("item")[i].getElementsByTagName("title")[0].firstChild.nodeValue;
	    	var link = doc.getElementsByTagName("channel")[0].getElementsByTagName("item")[i].getElementsByTagName("link")[0].firstChild.nodeValue;
	    	var pubdate = doc.getElementsByTagName("channel")[0].getElementsByTagName("item")[i].getElementsByTagName("pubDate")[0].firstChild.nodeValue;
        	document.getElementById(idd).innerHTML = "<span class=\"col-lg-12 picTitle\"><a href=\""+link+"\">"+title+"</a> <a><span class=\"fa fa-info-circle info-prac"+i+"\"></span></a></span>";
    	};
	}
	};
	y.send(null);
	$('#prac1.span').click(function(){
		var id = $(this).attr('id');
		alert(id);
	});
}
window.onload = codeAddress;

/*$(document).ready(function() {
for(var i=0; i<6; i++){
		var j =0;
		var idd ="upd"+i;
		if()
	}

});*/
