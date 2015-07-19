/*   jQuery plugin inputPrompt
	by BiWeiMing 
	2013-11-09 22:36
---------------------------------*/
//$color is change color
jQuery.inputPrompt=function($selector,$defaultColor,$changeColor){
	var formElement=$($selector);
	var currentValue=formElement.attr('data-placeholder');
	formElement.val(currentValue).css('color',$defaultColor);//set default value
	formElement.focus(function(){
		if(this.value==currentValue){
			this.value='';
			this.style.color=$changeColor;
		}
	}).blur(function(){
		if(this.value=='' || this.value==currentValue){
			this.value=currentValue;
			this.style.color=$defaultColor;
		}
	});
}