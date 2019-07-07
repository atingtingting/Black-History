window.onload = function() {
	returnTop();
	setInterval(function(){fnDate()},1000);   //加多一层函数才会动态变化？
	hotImgChange();
	fNavHeight();
	landCheck();
	regCheck();
}

function returnTop() {
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
    var height = document.documentElement.scrollTop;
    var nav = document.getElementById("f-nav");
    if( height > 350 ) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

function fNavHeight() {
	var fNav = document.getElementsByClassName("f-nav-b");
	for(var i = 0;i < fNav.length; i++) {
		fNav[i].style.top = (i*55) + "px";
	}
}

function fnDate() {
	var data = new Date();
	var time = data.toLocaleTimeString();
	document.getElementById("rvt-t").innerHTML = time;
}

b1.onclick = function() {
	var con1 = document.getElementById("flights-1");
	var con2 = document.getElementById("flights-2");
	var but1 = document.getElementById("b1");
	var but2 = document.getElementById("b2");
	con1.style.display = "flex";
	con2.style.display = "none";
	but2.style.color = "#005CAF";
	but1.style.color = "#69C";
}
b2.onclick = function() {
	var con1 = document.getElementById("flights-1");
	var con2 = document.getElementById("flights-2");
	var but1 = document.getElementById("b1");
	var but2 = document.getElementById("b2");
	con2.style.display = "flex";
	con1.style.display = "none";
	but1.style.color = "#005CAF";
	but2.style.color = "#69C";
}

function hotImgChange(){
	var hotImg = document.getElementsByClassName("hot-img");
	for(var i = 0;i < hotImg.length; i++) {
		hotImg[i].style.backgroundImage = "url(img/" + (1+i) + ".jpg)";
		hotImg[i].style.backgroundSize = "cover";
	}
}

var lcheck1 = false;
var lcheck2 = false;
lemail.onchange = function(){
    var text = document.getElementById("warn1");
    var email = this.value;
    var e = document.getElementById("lemail");
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(email === ""){
        text.innerHTML = "内容不可为空";
        text.style.color = "#d91f12";
        e.style.borderBottom = "2px solid #d91f12";
        lcheck1 = false;
    }else if(reg.test(email)){
        text.innerHTML = "成功";
        text.style.color = "#85ace0";
        e.style.borderBottom = "2px solid #85ace0";
        lcheck1 = true;
    }else{
        text.innerHTML = "请输入正确邮箱地址";
        text.style.color = "#d91f12";
        e.style.borderBottom = "2px solid #d91f12";
        lcheck1 = false;
    }
}
lpassword.onchange = function(){
    var text = document.getElementById("warn2");
    var password = this.value;
    var p = document.getElementById("lpassword");
    if(password === ""){
        text.innerHTML = "内容不可为空";
        text.style.color = "#d91f12";
        p.style.borderBottom = "2px solid #d91f12";
        lcheck2 = false;
    }else{
        text.innerHTML = "成功";
        text.style.color = "#85ace0";
        p.style.borderBottom = "2px solid #85ace0";
        lcheck2 = true;
    }
}
function landCheck(){
	var landBut = document.getElementById("land-but");
	if(lcheck1&&lcheck2){
		delete landBut.disabled;
	}
}

var rcheck1 = false;
var rcheck2 = false;
var rcheck3 = false;
remail.onchange = function(){
    var text = document.getElementById("warn3");
    var email = this.value;
    var e = document.getElementById("remail");
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(email === ""){
        text.innerHTML = "内容不可为空";
        text.style.color = "#d91f12";
        e.style.borderBottom = "2px solid #d91f12";
        rcheck1 = false;
    }else if(reg.test(email)){
        text.innerHTML = "成功";
        text.style.color = "#85ace0";
        e.style.borderBottom = "2px solid #85ace0";
        rcheck1 = true;
    }else{
        text.innerHTML = "请输入正确邮箱地址";
        text.style.color = "#d91f12";
        e.style.borderBottom = "2px solid #d91f12";
        rcheck1 = false;
    }
}
rpassword1.onchange = function(){
    var text = document.getElementById("warn4");
    var password = this.value;
    var p = document.getElementById("rpassword1");
    if(password === ""){
        text.innerHTML = "内容不可为空";
        text.style.color = "#d91f12";
        p.style.borderBottom = "2px solid #d91f12";
        rcheck2 = false;
    }else{
        text.innerHTML = "成功";
        text.style.color = "#85ace0";
        p.style.borderBottom = "2px solid #85ace0";
        rcheck2 = true;
    }
}
rpassword2.onchange = function(){
    var text = document.getElementById("warn5");
    var password = this.value;
    var p = document.getElementById("rpassword2");
    if(password === ""){
        text.innerHTML = "内容不可为空";
        text.style.color = "#d91f12";
        p.style.borderBottom = "2px solid #d91f12";
        rcheck3 = false;
    }else if(password != document.getElementById("rpassword1").value){
        text.innerHTML = "请输入相同的密码";
        text.style.color = "#d91f12";
        p.style.borderBottom = "2px solid #d91f12";
        rcheck3 = false;
    }else{
        text.innerHTML = "成功";
        text.style.color = "#85ace0";
        p.style.borderBottom = "2px solid #85ace0";
        rcheck3 = true;
    }
}
function regCheck(){
	var regBut = document.getElementById("reg-but");
	if(rcheck1&&rcheck2&&rcheck3){
		delete regBut.disabled;
	}
}


var lOpen = document.getElementById("land-open");
var lClose = document.getElementById("land-close");
var rOpen = document.getElementById("reg-open");
var rClose = document.getElementById("reg-close");
var r_lOpen = document.getElementById("lreg-but");
var l_rOpen = document.getElementById("rland-but");
var landBox = document.getElementById("land-box");
var regBox = document.getElementById("reg-box");
var mask = document.getElementById("mask");
lOpen.onclick = function(){
	mask.style.display = "block";
	landBox.style.display = "block";
}
lClose.onclick = function(){
	mask.style.display = "none";
	landBox.style.display = "none";
}
rOpen.onclick = function(){
	mask.style.display = "block";
	regBox.style.display = "block";
}
rClose.onclick = function(){
	mask.style.display = "none";
	regBox.style.display = "none";
}
r_lOpen.onclick = function(){
	landBox.style.display = "none";
	regBox.style.display = "block";
	return false;
}
l_rOpen.onclick = function(){     
	regBox.style.display = "none";
	landBox.style.display = "block";
	return false;
}