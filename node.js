var ajax;
function createRequest(url,callBackFunction,loadingFunction){
	// create request
	if(window.XMLHttpRequest){
		ajax=new XMLHttpRequest();
	}else{
		ajax=new ActiveXObject("Microsoft.XMLHTTP");
	}

	// if error then exit
	if(!ajax){ return false; }
	
	// send data
	ajax.open("GET",url,true);
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200){
			callBackFunction();
		}else{
			if(loadingFunction) { loadingFunction(); }
		}
	}
	ajax.send(null);
}

createRequest('default.html',
	function(){ window.location="default.html"; },
	function(){ document.body.innerHTML="<h1>Loading...</h1>"; }
);


