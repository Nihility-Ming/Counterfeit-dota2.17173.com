<?php
header('Contype-Type:text/html;charset=utf-8');
//if field send exist then append data
if(isset($_GET['send'])){
	$reviewTxt=fopen('review.txt','a');
	$data=$_GET['send']."\r\n";
	fwrite($reviewTxt,$data);
	fclose($reviewTxt);
}

//read text content,print html code
$mytxt=file('review.txt');
if(isset($_GET['number'])){
	echo(count($mytxt));
	exit();
}
foreach($mytxt as $txt){
	echo("<li>$txt</li>");
}
?>