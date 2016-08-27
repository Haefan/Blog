//取样式
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}
// 运动函数
function startMove(obj,jSon,fnEnd){
		
	clearInterval(obj.timer);//首先关闭定时器
	obj.timer=setInterval(function(){
		var isStop=true;		//假设所有的值都已经到达
		for(var attr in jSon){	
			var curStyle;
			var speed;
			if(attr=='opacity'){	
				curStyle=Math.round(parseFloat(getStyle(obj,'opacity'))*100);
			}else{
				curStyle=parseInt(getStyle(obj,attr));
			}
			speed=(jSon[attr]-curStyle)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);				
		
			if(curStyle!=jSon[attr]){			//有一个值没有到
				isStop=false;
			}
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(curStyle+speed)+')';
				obj.style.opacity=(curStyle+speed)/100;
			}else{
				obj.style[attr]=curStyle+speed+'px';
			}
		}
			if(isStop){
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
	},30);
}