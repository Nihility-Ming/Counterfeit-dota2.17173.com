<?php
	function message($content,$url){//自定义消息函数
		echo("<script type=text/javascript>alert('$content');location.href='$url';</script>");
	}
	function fields($element){//自定义接收字段函数
		return $element=trim($_POST[$element]);
	}
	function vioce($str,$element){
		if(strlen($element)){
			return $str.$element;
		}
	}
?>
<?php
//验证是否点击按钮过来的
if(!(isset($_POST['send'])&&$_POST['send']=="提交注册")){
	message('非法登录，原因：您不是点击提交按钮进来的。','register.html');
}
/* 获取字段值
------------------------------------------------*/
$username=fields('username');
$pwd1=fields('pwd1');
$pwd2=fields('pwd2');
$email=fields('email');
$truename=fields('truename');
$sex=fields('sex');
if($sex){//重置性别值
	$sex='女';
}else{
	$sex='男';
}
//$age=fields('age');
$birthday=fields('birthday');
$phone=fields('phone');
$personalURL=fields('personalURL');
$info=fields('info');
$arr=array('帐号：'=>$username,'密码：'=>$pwd1,'电子邮件：'=>$email,'真实姓名：'=>$truename,'性别：'=>$sex,'生日：'=>$birthday,'手机号码：'=>$phone,'个人主页：'=>$personalURL,'简介：'=>$info);
$str=implode('   ',$arr);
file_put_contents('result.txt',$str);
/* create image code */
$image=imagecreatefromjpeg('images/bg_font.jpg');
$white=imagecolorallocate($image,255,255,255);
imagettftext($image,60,0,170,200,$white,'images/hanyi.ttf','帐号：'.$arr['帐号：']);
imagettftext($image,60,0,170,270,$white,'images/hanyi.ttf','密码：'.$arr['密码：']);
imagettftext($image,60,0,170,340,$white,'images/hanyi.ttf','电子邮件：'.$arr['电子邮件：']);
imagettftext($image,60,0,170,410,$white,'images/hanyi.ttf','生日：'.$arr['生日：']);
imagettftext($image,60,0,170,480,$white,'images/hanyi.ttf','性别：'.$arr['性别：']);
imagejpeg($image,'result.jpeg');
//end create image
message('注册成功！已生成文件：','register.html');
?>