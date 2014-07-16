$(document).ready(imReady);
function imReady()
{
	
	var heightOffset=$(window).height()-$('#main-text-plate').height()-$('#market-plate').height()-$(window).height()/12;
	heightOffset/=2;
	$('#main-page').css({'height':$(window).height().toString()+'px'})

	$('#main-text-plate').css({'margin-top':heightOffset.toString()+'px','margin-bottom':heightOffset.toString()+'px'})
	//$('#main-pic').css({'background-size':($(window).height()*0.4).toString()+'px'})
	
	$(window).scroll(function()
	{
		console.log($(document).scrollTop())
		if($(document).scrollTop()<$('#category-plate').position().top-200)
		{

		}
		else if($(document).scrollTop()>$('#category-plate').position().top-200 && $('#category-plate').hasClass('in-side'))
		{
			console.log("category")
			$('#category-image').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#category-text').css({'animation':'from-right 0.7s','-webkit-animation':'from-right 0.7s','animation-fill-mode': 'forwards'});
			$('#category-plate').removeClass('in-side');
		}
		else if($(document).scrollTop()>$('#subject-plate').position().top-200 && $('#subject-plate').hasClass('in-side'))
		{
			console.log("subject")
			$('#subject-image').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#subject-text').css({'animation':'from-right 0.7s','-webkit-animation':'from-right 0.7s','animation-fill-mode': 'forwards'});
			$('#subject-plate').removeClass('in-side');
		}
		else if($(document).scrollTop()>$('#ai-plate').position().top-200 && $('#ai-plate').hasClass('in-side'))
		{
			console.log("ai")
			$('#ai-image').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#ai-text').css({'animation':'from-right 0.7s','-webkit-animation':'from-right 0.7s','animation-fill-mode': 'forwards'});
			$('#ai-plate').removeClass('in-side');
		}
		else if($(document).scrollTop()>$('#lost-plate').position().top-200 && $('#lost-plate').hasClass('in-side'))
		{
			console.log("lost")
			$('#lost-image').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#lost-text').css({'animation':'from-right 0.7s','-webkit-animation':'from-right 0.7s','animation-fill-mode': 'forwards'});
			$('#lost-plate').removeClass('in-side');
		}
		else if($(document).scrollTop()>$('#source-plate').position().top-200 && $('#source-plate').hasClass('in-side'))
		{
			console.log("source")
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
