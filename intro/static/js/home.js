$(document).ready(imReady);
currentNavID=1;
navNumber=4;
rightDisable=false;
leftDisable=true;
selectedPlatform='ipad';
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
function selectIpad()
{
	$('#ipadSelector').addClass('activated');
	if($('#iphoneSelector').hasClass('activated'))
	{
		$('#iphoneSelector').removeClass('activated');
	}
	selectedPlatform='ipad';

	if($('.sliderBullet').hasClass('icon-circle'))
		$('.sliderBullet').removeClass('icon-circle');
	$('.sliderBullet').addClass('icon-circle-empty');

	$('#nav1').addClass('icon-circle');
	if($('#nav1').hasClass('icon-circle-empty'))
		$('#nav1').removeClass('icon-circle-empty');
	leftDisable=true;
	rightDisable=false;
	$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
	$('#sliderNavPlate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
	setTimeout(function()
	{
		$('#showroomImage').css({'display':'none'});
		$('#loading-plate').css({'display':'block'});
		$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
		$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
		currentNavID=1;
		var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
			$('#showroomImage').attr('src', file).load(function() {  
			$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
			setTimeout(function(){
				$('#showroomImage').css({'display':'block'});
				$('#loading-plate').css({'display':'none'});
				$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
				$('#sliderNavPlate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			},300);
		});
	},300);

}
function selectIphone()
{
	$('#iphoneSelector').addClass('activated');
	if($('#ipadSelector').hasClass('activated'))
	{
		$('#ipadSelector').removeClass('activated');
	}
	selectedPlatform='iphone';
	if($('.sliderBullet').hasClass('icon-circle'))
		$('.sliderBullet').removeClass('icon-circle');
	$('.sliderBullet').addClass('icon-circle-empty');
	$('#toSlideLeft').css({'opacity':'0.6'});
	$('#toSlideRight').css({'opacity':'1'});
	$('#nav1').addClass('icon-circle');
	if($('#nav1').hasClass('icon-circle-empty'))
		$('#nav1').removeClass('icon-circle-empty');
	leftDisable=true;
	rightDisable=false;
	$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
	$('#sliderNavPlate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
	setTimeout(function(){
		$('#showroomImage').css({'display':'none'});
		$('#loading-plate').css({'display':'block'});
		$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
		$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
		currentNavID=1;
		var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
			$('#showroomImage').attr('src', file).load(function() {  
			$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
			setTimeout(function(){
				$('#showroomImage').css({'display':'block'});
				$('#loading-plate').css({'display':'none'});
				$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
				$('#sliderNavPlate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			},300);
		});
	},300);


}
function changeSlideLeft()
{
	rightDisable=false;
	$('#toSlideRight').css({'opacity':'1'});
	console.log(leftDisable)
	if(!leftDisable)
	{
		currentNavID-=1;
		if(currentNavID<=1)
		{
			leftDisable=true;
			$('#toSlideLeft').css({'opacity':'0.6'});
		}
		if($('.sliderBullet').hasClass('icon-circle'))
			$('.sliderBullet').removeClass('icon-circle');
		$('.sliderBullet').addClass('icon-circle-empty');
		console.log('#nav'+(currentNavID).toString())
		$('#nav'+(currentNavID).toString()).addClass('icon-circle');
		if($('#nav'+(currentNavID).toString()).hasClass('icon-circle-empty'))
			$('#nav'+(currentNavID).toString()).removeClass('icon-circle-empty');
		$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function(){
			$('#showroomImage').css({'display':'none'});
			$('#loading-plate').css({'display':'block'});
			$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
			$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
				$('#showroomImage').attr('src', file).load(function() {  
				$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
				setTimeout(function(){
					$('#showroomImage').css({'display':'block'});
					$('#loading-plate').css({'display':'none'});
					$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
				},300);
			});
		},300);


	}
}
function changeSlideRight()
{
	leftDisable=false;
	$('#toSlideLeft').css({'opacity':'1'});
	if(!rightDisable)
	{
		currentNavID+=1;
		if(currentNavID>=navNumber)
		{
			rightDisable=true;
			$('#toSlideRight').css({'opacity':'0.6'});
		}
		if($('.sliderBullet').hasClass('icon-circle'))
			$('.sliderBullet').removeClass('icon-circle');
		$('.sliderBullet').addClass('icon-circle-empty');
		console.log('#nav'+(currentNavID).toString())
		$('#nav'+(currentNavID).toString()).addClass('icon-circle');
		if($('#nav'+(currentNavID).toString()).hasClass('icon-circle-empty'))
			$('#nav'+(currentNavID).toString()).removeClass('icon-circle-empty');
		$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function(){
			$('#showroomImage').css({'display':'none'});
			$('#loading-plate').css({'display':'block'});
			$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
			$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
				$('#showroomImage').attr('src', file).load(function() {  
				$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
				setTimeout(function(){
					$('#showroomImage').css({'display':'block'});
					$('#loading-plate').css({'display':'none'});
					$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
				},300);
			});
		},300);

	}	
}
function sliderNavigation()
{
	navID=parseInt($(this).attr("id").match(/\d+$/)[0])
	if(navID!=currentNavID)
	{
		currentNavID=navID;
		//console.log(currentNavID)
		if(currentNavID==1)
		{
			leftDisable=true;
			rightDisable=false;
			$('#toSlideLeft').css({'opacity':'0.6'});
			$('#toSlideRight').css({'opacity':'1'});
		}
		else if(currentNavID>=navNumber)
		{
			rightDisable=true;
			leftDisable=false;
			$('#toSlideRight').css({'opacity':'0.6'});
			$('#toSlideLeft').css({'opacity':'1'});
		}
		else
		{
			rightDisable=false;
			leftDisable=false;
			$('#toSlideRight').css({'opacity':'1'});
			$('#toSlideLeft').css({'opacity':'1'});
		}
		if($('.sliderBullet').hasClass('icon-circle'))
			$('.sliderBullet').removeClass('icon-circle');
		$('.sliderBullet').addClass('icon-circle-empty');
		$(this).addClass('icon-circle');
		if($(this).hasClass('icon-circle-empty'))
			$(this).removeClass('icon-circle-empty');
		$('#showroomImage').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
		setTimeout(function(){
			$('#showroomImage').css({'display':'none'});
			$('#loading-plate').css({'display':'block'});
			$('#loading-col').css({'margin-top':(($('#loading-plate').height()-$('#loading-col').height())/2).toString()+'px'});
			$('#loading-plate').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
			var file = 'static/image/screenshots/'+selectedPlatform+currentNavID.toString()+'.jpg';
				$('#showroomImage').attr('src', file).load(function() {  
				$('#loading-plate').css({'animation':'hider 0.3s','-webkit-animation':'hider 0.3s','animation-fill-mode': 'forwards'});
				setTimeout(function(){
					$('#showroomImage').css({'display':'block'});
					$('#loading-plate').css({'display':'none'});
					$('#showroomImage').css({'animation':'shower 0.3s','-webkit-animation':'shower 0.3s','animation-fill-mode': 'forwards'});
				},300);
			});
		},300);
	}

}
function imReady()
{
	
	var heightOffset=$(window).height()-$('#main-text-plate').height()-$('#market-plate').height()-$(window).height()/12;
	heightOffset/=2;
	$('#main-page').css({'height':$(window).height().toString()+'px'})
	$('#blog-page').css({'height':$(window).height().toString()+'px'})
	$('#showroom-plate').css({'height':$(window).height().toString()+'px'})
	$('#contact-plate').css({'height':($('#blog-page').height()*0.4).toString()+'px'});
	$('#blog-button-plate').css({'height':($('#blog-page').height()*0.6).toString()+'px'});
	$('#slider-plate').css({'height':(($(window).height()-$('#platform-selector-plate').outerHeight())*0.85).toString()+'px'})
	$('.slideChanger').css({'line-height':(($(window).height()-$('#platform-selector-plate').outerHeight())*0.85).toString()+'px'})
	$('#main-text-plate').css({'margin-top':heightOffset.toString()+'px','margin-bottom':heightOffset.toString()+'px'})
	//$('#main-pic').css({'background-size':($(window).height()*0.4).toString()+'px'})
	//console.log($('.desc-images').parent().height())
	console.log($('#goAbout').height())
	$('.desc-images').css({'margin-top':($('.desc-images').parent().height()*0.25).toString()+'px'});
	$('.desc-text').css({'margin-top':(($('.desc-text').parent().parent().height()-$('.desc-text').height())/2).toString()+'px'});
	$('#goTopP').css({'margin-top':(($('#goTop').height()-$('#goTopP').height())/2).toString()+'px'});
	$('#goAbout').css({'margin-top':(($('#goBlog').parent().height()-68-$('#goAbout').outerHeight())/2).toString()+'px'});
	$('#connections-plate').css({'margin-top':(($('#connections-plate').parent().height()-50-$('#connections-plate').height())/2).toString()+'px'});
	$('#main-picLarge').css({'background-size':($('#main-page').height()*0.4).toString()+'px'});
	$('#main-picMedium').css({'background-size':($('#main-page').height()*0.3).toString()+'px'});
	$('#main-picMedium').css({'background-position': '3% 100%'});
	//$('#goBlog').click(goToBlog);
	$('#goTop').click(goToTop);
	//$('#gotAppStore').click(goToAppstore);
	$('#ipadSelector').click(selectIpad);
	$('#iphoneSelector').click(selectIphone);
	$('#toSlideLeft').click(changeSlideLeft);
	$('#toSlideRight').click(changeSlideRight);
	$('.sliderBullet').click(sliderNavigation);
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
		else if($(document).scrollTop()>$('#showroom-plate').position().top-300 && $('#showroom-plate').hasClass('in-side'))
		{
			//console.log("category")
			$('#showroom-col').css({'animation':'from-left 0.7s','-webkit-animation':'from-left 0.7s','animation-fill-mode': 'forwards'});
			$('#showroom-plate').removeClass('in-side');
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
