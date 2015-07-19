/*	Custom jQuery Plugin (scrollLevel)
	  Date	   2013-11-09
	  Time 	   17:20
	Editor    Biweiming
     E-mail 	  tvlogin@qq.com
------------------------- --------------*/
jQuery.scrollLevel=function($stage,$btn_prev,$btn_next,$number,$easing){
	var		btn_prev=$($btn_prev),	// request previous button
			btn_next=$($btn_next),// request next button
			stage=$($stage),	// request stage
			number=$number,// request element number
			easing=$easing,// request option easing
			stageWidth=stage.width(),// request stage width
			stageAllWidth=stageWidth*number,// request stage total width
			pointX=0;// request current pointX
	/* set stage inside container and stage opacity */
	stage.children('div').css('width',stageAllWidth).end().css('opacity',.8).hover(
		function(){
			stage.animate({'opacity':1});
			},
		function(){
			stage.animate({'opacity':.8});
			}
		);
	/* previous button click event */
	btn_next.bind('click',function(e){
		e.preventDefault();	$(this).blur();
		if(pointX>=stageAllWidth-stageWidth){
			pointX=0;
		}else{
			pointX+=stageWidth;
		}
		stage.stop().animate({'scrollLeft':pointX},'slow',easing);// go to scrolling
	});
	/* next button click event */
	btn_prev.bind('click',function(e){
		e.preventDefault();	$(this).blur();
		if(pointX<=0){
			pointX=stageAllWidth-stageWidth;
		}else{
			pointX-=stageWidth;
		}
		stage.stop().animate({'scrollLeft':pointX},'slow',easing);// go to scrolling
	});
}