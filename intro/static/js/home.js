$(document).ready(imReady);
function goToBlog()
{
	var win = window.open('http://blog.mirad.ir', '_blank');
	win.focus();
}
function goToAppstore()
{
	var win = window.open('https://itunes.apple.com/us/app/mirad/id905669570', '_blank');
	win.focus();
}
function goToTop()
{
	$("html, body").animate({ scrollTop: 0 }, "slow");
}
function imReady()
{
	
	var heightOffset=$(window).height()-$('#main-text-plate').height()-$('#market-plate').height()-$(window).height()/12;
	heightOffset/=2;
	$('#main-page').css({'height':$(window).height().toString()+'px'})
	$('#blog-page').css({'height':$(window).height().toString()+'px'})
	$('#contact-plate').css({'height':($('#blog-page').height()*0.4).toString()+'px'});
	$('#blog-button-plate').css({'height':($('#blog-page').height()*0.6).toString()+'px'});

	$('#main-text-plate').css({'margin-top':heightOffset.toString()+'px','margin-bottom':heightOffset.toString()+'px'})
	//$('#main-pic').css({'background-size':($(window).height()*0.4).toString()+'px'})
	//console.log($('.desc-images').parent().height())
	$('.desc-images').css({'margin-top':($('.desc-images').parent().height()*0.25).toString()+'px'});
	$('.desc-text').css({'margin-top':(($('.desc-text').parent().parent().height()-$('.desc-text').height())/2).toString()+'px'});
	$('#goTopP').css({'margin-top':(($('#goTop').height()-$('#goTopP').height())/2).toString()+'px'});
	$('#goBlog').css({'margin-top':(($('#goBlog').parent().height()-68)/2).toString()+'px'});
	$('#connections-plate').css({'margin-top':(($('#connections-plate').parent().height()-50-$('#connections-plate').height())/2).toString()+'px'});
	$('#main-picLarge').css({'background-size':($('#main-page').height()*0.4).toString()+'px'});
	$('#main-picMedium').css({'background-size':($('#main-page').height()*0.3).toString()+'px'});
	$('#main-picMedium').css({'background-position': '3% 100%'});
	$('#goBlog').click(goToBlog);
	$('#goTop').click(goToTop);
	$('#gotAppStore').click(goToAppstore);
	$(window).scroll(function()
	{
		//console.log($(document).scrollTop())
		if($(document).scrollTop()<$('#category-plate').position().top-300)
		{

		}
		else if($(document).scrollTop()>$('#category-plate').position().top-300 && $('#category-plate').hasClass('in-side'))
		{
			//console.log("category")
			$('#category-image').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#category-text').css({'animation':'from-right 0.7s','-webkit-animation':'from-right 0.7s','animation-fill-mode': 'forwards'});
			$('#category-plate').removeClass('in-side');
		}
		else if($(document).scrollTop()>$('#subject-plate').position().top-300 && $('#subject-plate').hasClass('in-side'))
		{
			//console.log("subject")
			$('#subject-image').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#subject-text').css({'animation':'from-right 0.7s','-webkit-animation':'from-right 0.7s','animation-fill-mode': 'forwards'});
			$('#subject-plate').removeClass('in-side');
		}
		else if($(document).scrollTop()>$('#ai-plate').position().top-300 && $('#ai-plate').hasClass('in-side'))
		{
			//console.log("ai")
			$('#ai-image').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#ai-text').css({'animation':'from-right 0.7s','-webkit-animation':'from-right 0.7s','animation-fill-mode': 'forwards'});
			$('#ai-plate').removeClass('in-side');
		}
		else if($(document).scrollTop()>$('#lost-plate').position().top-300 && $('#lost-plate').hasClass('in-side'))
		{
			//console.log("lost")
			$('#lost-image').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#lost-text').css({'animation':'from-right 0.7s','-webkit-animation':'from-right 0.7s','animation-fill-mode': 'forwards'});
			$('#lost-plate').removeClass('in-side');
		}
		else if($(document).scrollTop()>$('#source-plate').position().top-300 && $('#source-plate').hasClass('in-side'))
		{
			//console.log("source")
			$('#source-image').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#source-text').css({'animation':'from-right 0.7s','-webkit-animation':'from-right 0.7s','animation-fill-mode': 'forwards'});
			$('#source-plate').removeClass('in-side');
		}
		/*else if($(document).scrollTop()>$('#contact').position().top-300 && $('#header-contact').hasClass('current')==false)
		{
			resetHeaders()
			$('#header-contact').addClass('current');
			//console.log('contact')
		}*/
	});
}
