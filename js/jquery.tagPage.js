/* editor 2013-11-07 23:59 by BiWeiMing */
jQuery.tagPage=function($handler,$display,$class,$speed){
	//request element by jQuery selector
	var handler=$($handler),display=$($display),timer,i=0,thisPosition;
	handler.mouseover(function(){
		var $this=$(this);
		var index=handler.index($this);
		if(index==thisPosition){return;}else{thisPosition=index;}//exit
		display.stop().hide();
		display.eq(index).fadeIn('slow');//fadeIn
		if($class){//append or delete css class
			handler.removeClass($class);
			$this.addClass($class);
		}
		i=index;//request current position
	}).eq(0).trigger('mouseover');//execute default 
	//if $speed exist then execute player
	if($speed){
		timer=setInterval(function(){
			handler.eq(++i).mouseover();
			if(i==handler.length){
				i=0;
				handler.eq(0).mouseover();
			}
		},$speed);
	}
}