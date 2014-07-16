$(document).ready(imReady);
function imReady()
{
	
	var heightOffset=$(window).height()-$('#main-text-plate').height()-$('#market-plate').height()-$(window).height()/12;
	heightOffset/=2;
	$('#main-page').css({'height':$(window).height().toString()+'px'})

	$('#main-text-plate').css({'margin-top':heightOffset.toString()+'px','margin-bottom':heightOffset.toString()+'px'})
	//$('#main-pic').css({'background-size':($(window).height()*0.4).toString()+'px'})
	

}
