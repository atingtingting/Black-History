window.onload = function() {
	var timer = null;
	var top = document.getElementById("top");
	top.onclick = function fn(){
	    var oTop = document.body.scrollTop || document.documentElement.scrollTop;  
	    // 获得滚动高度
	    if(oTop > 0){
	        document.body.scrollTop = document.documentElement.scrollTop = oTop - Math.ceil(oTop/20);
	        timer = setTimeout(fn,10);
	    }else{
	        clearTimeout(timer);
	    }    
	}
}

window.onscroll = function() {
    var H = document.documentElement.scrollTop;
    var nav = document.getElementById("f-nav");
    if( H > 350 ) {
        nav.style = "display:block;"
    } else {
        nav.style = "display:none;"
    }
}

rvt.onclick = function fnDate() {
	var t = document.getElementById("rvt-t");
	var date = new Date();
	var year = date.getFullYear();//当前年份
	var month = date.getMonth();//当前月份
	var data = date.getDate();//天
	var hours = date.getHours();//小时
	var minute = date.getMinutes();//分
	var second = date.getSeconds();//秒
	var time = year+"-"+fnW(month+1)+"-"+fnW(data)+" "+fnW(hours)+":"+fnW(minute)+":"+fnW(second);
	t.innerHTML = time;
}

function fnW(str) {
	// 补位
	var num;
	str>=10?num=str:num="0"+str;
	return num;
} 

b1.onclick = function() {
	var con = document.getElementById("flights");
	var con2 = document.getElementById("flights-2");
	var but1 = document.getElementById("b1");
	var but2 = document.getElementById("b2");
	con.style = "display:block;";
	con2.style = "display:none;";
	but2.style = "color: #005CAF;";
	but1.style = "color: #69C;";
}
b2.onclick = function() {
	var con = document.getElementById("flights");
	var con2 = document.getElementById("flights-2");
	var but1 = document.getElementById("b1");
	var but2 = document.getElementById("b2");
	con2.style = "display:block;";
	con.style = "display:none;";
	but1.style = "color: #005CAF;";
	but2.style = "color: #69C;";
}