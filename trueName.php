<?php
header('Contype-Type:text/html;charset=utf-8');
$userName=file('trueName.txt');//set text file location
$name=$_GET['truename'];
if(count($name)>0){
	$result='';
	for($i=0;$i<count($userName);$i++){
		if(strtolower($name)==strtolower(substr($userName[$i],0,strlen($name)))){
			if($result==''){
				$result=$userName[$i];//first element
			}else{
				$result=$result.' , '.$userName[$i];
			}
		}
	}
	if($result==''){
		print('找不到相匹配的姓名');
	}else{
		print($result);
	}
}
?>