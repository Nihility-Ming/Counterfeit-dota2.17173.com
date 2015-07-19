/*   jQuery plugin scrollTop
	by BiWeiMing 
	2013-11-09 19:07
---------------------------------*/
jQuery.scrollTop=function(imgURL,msg,easing,time){
	var customIMG,customMsg;// define custom image and custom message (relative current HTML document) variable
	if(imgURL){customIMG='url('+imgURL+')';}else{customIMG='url(images/scrollTop.jpg)';}// set custom click image
	if(msg){customMsg=msg;}else{customMsg='滚动到顶部';}// set custom message(if on mouse over then show)
	$('<div id="scrollTop"><a href="#" title="'+customMsg+'">"'+customMsg+'</a></div>').appendTo('body').css({
		'background-image':customIMG,
		'position':'absolute',
		'right':'40px',
		'border-radius':'10px',
		'opacity':'0.7'
	}).hide();//append html
	var $scrollTop=$('#scrollTop'),i;
	$scrollTop.find('a').css({// set anchor CSS
		'background-repeat':'no-repeat',
		'text-indent':'-9999px',
		'display':'block',
		'height':'44px',
		'width':'48px'
	});
	$(window).scroll(function(){//  start main code
	if($(document).scrollTop()>200){
		$scrollTop.show();
		i=$(document).scrollTop()+$(window).height()-100;// compute #scrollTop top
		i+='px';
		$scrollTop.stop().animate({top:i},500);
	}else{
		$scrollTop.hide();
	return;
	}
	});//end scroll
	$scrollTop.click(function(e){
			$scrollTop.children('a').blur();// clear dashed line
			e.preventDefault();// clear location char(#)
			$('html,body').stop().animate({scrollTop:0},time,easing);// google chrome not support $(document).animate()
	});
}