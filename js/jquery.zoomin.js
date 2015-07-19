/*	Name	zoomIn
	Type	jQuery plugin
	Effect	mouse over then zoom in photo,this's create frame
	Editor	Biweiming
	Date	2013-11-12 10:30
-------------------------------------------------------------*/
jQuery.zoomIn=function($element,$sourcePhotoWidth){
	$('body').append('<div id="zoomIn"><div id="zoomInCon"></div><div id="zoomInTitle"></div></div>');
	var		element=$($element),// request control element
			zoomIn=$('#zoomIn'),// div-wrapper
			zoomInCon=$('#zoomInCon'),// div-images
			zoomInTitle=$('#zoomInTitle'),// div-title
			$this,$thisTitle;
	zoomIn.css({'position':'absolute','z-index':999,'width':($sourcePhotoWidth+10)}).hide();
	zoomInTitle.css({'background-color':'#444','color':'white','font-weight':'bold','border-radius':'10px','text-align':'center','font-size':'16px','padding':'5px 10px','box-shadow':'5px 5px 5px #222'});
	element.hover(function(){// show
		$this=$(this);// element variable
		$thisTitle=$this.attr('title');// element title
		$this.attr('title','');//  clear system default title
		var		$thisImg='<img src="'+$this.attr('src')+'"/>',// set image HTML
				$thisImgWidth=$this.width(),// element image width
				$thisPoint=$this.offset(),// element offset
				overWidth=element.width()+$thisPoint.left+$sourcePhotoWidth+15;// count overflow width
		if(overWidth>=($(window).width()-20)){// if overflow screen width then image move to left
			zoomIn.css({'left':($thisPoint.left-$sourcePhotoWidth-15),'top':$thisPoint.top});
		}else{
			zoomIn.css({'left':($thisPoint.left+$thisImgWidth+15),'top':$thisPoint.top});
		}
		zoomInCon.html($thisImg);// add image
		zoomInTitle.html($thisTitle);// add title
		$('img',zoomInCon).css({'border':'5px solid #fff','border-radius':'20px','box-shadow':'10px 10px 10px #000','display':'block'});//set image style
		zoomIn.show();//show
	},function(){
		$this.attr('title',$thisTitle);// reset add systime title
		zoomIn.hide();// hidden
	});
}