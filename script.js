window.onload=function(){
	/*function showMsg(){
	alert('Test');
	setTimeout(showMsg, 1000);
}
	setTimeout(showMsg,1000);*/
	
/*myp.onclick=function(){
	alert('p');
}
mydiv.onclick=function(){
	alert('div');
}*/
/*myform.onclick=function(event){
	alert('form');
	console.log(event);
	var target=event.target;
	console.log(target);
	console.log(target.tegName);
	alert(event.target.tagName);
}*/

var res=document.querySelector(".res");
var top=document.querySelector(".top");

var calc={
	replace:true,
	repeatoperetion:false,
	memory:' ',
	numberClick:function(value, res){
		if(this.replace){
			res.value=value;
			this.replace=false;
		}
		else{
			res.value+=value;
		}
	},

	operationClick:function(value, res, top){
		top.value+=res.value+value;
		if(this.repeatoperetion==false){
			this.memory=top.value;
			this.repeatoperetion=true;
	}
		else{
			res.value=eval(this.memory+res.value);
			this.memory=res.value+value;
		}
		this.replace=true;
		
	},
	equalClick:function(res, top){
		res.value=eval(this.memory+res.value);
		top.value="";
		this.replace=true;
		this.repeatoperetion=false;
		this.memory=' ';
	},
	clearClick:function(res, top){
		res.value='0';
		top.value='';
		this.replace=true;
		this.repeatoperetion=false;
		this.memory=' ';
	},
	pointClick:function(val, res){
		if(this.replace){
			res.value='0.';
			this.replace=false;
			return;
		}
		var str=res.value;
		var pos=str.indexOf('.');
		if(pos!=-1)return
			res.value+=val;
		
	}
}

calculator.onmouseover=function(event){
	var target=event.target;
	if(target.tagName!='INPUT')
		return;

	var atr=target.getAttribute('type');
	if(atr=='text') return;

	target.classList.add('orange');
}

calculator.onmouseout=function(event){
	event.target.classList.remove('green');
}

calculator.onclick=function(event){
	var target=event.target;
	
	if(target.tagName!='INPUT')
		return;
	var atr=target.getAttribute('type');
	
	if(atr=='text')
		return;
	var val=target.value;
	
	if(!isNaN(val)){
		/*alert('Число-'+val);*/
		calc.numberClick(val,res);
	}

	if(val=='+'||val=='-'||val=='*'||val=='/'){
		/*alert('Символ операції-'+val);*/
		calc.operationClick(val,res,top);
	}
	if(val=='='){
		calc.equalClick(res, top);
	}
	if(val=='C'){
		calc.clearClick(res, top);
	}
	if(val=='.'){
		calc.pointClick(val, res);
	}
}


}