var backTop=document.getElementById("backTop");		
backTop.onclick=function(){
		var sdelay=null;
		clearInterval(sdelay);
		sdelay=setInterval(function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(scrollTop>0){
				window.scrollBy(0,-300);
			}else{
				clearInterval(sdelay);
				scrollTop=0;
			}
		},30);	
};