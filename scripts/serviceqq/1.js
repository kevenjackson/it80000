﻿document.write("<div class='QQbox' id='divQQbox' >");
document.write("<div class='Qlist' id='divOnline' onmouseout='hideMsgBox(event);' style='display : none;'>");
document.write("<div class='t'></div>");
document.write("<div class='infobox'>Contact us</div>");
document.write("<div class='con'>");
document.write("<ul>");
document.write("<li class=odd><a href='http://wpa.qq.com/msgrd?V=1&amp;Uin=598566084&amp;Site=QQ咨询&amp;Menu=yes' target='_blank'><img src=' http://wpa.qq.com/pa?p=1:598566084:4'  border='0' alt='QQ' />QQ咨询</a></li>");

document.write('<li><a href="skype:kevenjackson?call" _fcksavedurl=""skype:kevenjackson?call="skype:kevenjackson?call""" on-click="return skypeCheck();"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1477519989459&di=0354c9b291aeddec5f294c828da9b4b5&imgtype=jpg&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F13%2F92%2F75%2F00758PICcnT_1024.jpg" width="18" height="17" alt="skype" />skype: kevenjackson</a></li>');

document.write('<li><a href="http://amos1.taobao.com/msg.ww?v=2&uid=香帅keven&s=2"><img src="http://amos1.taobao.com/online.ww?v=2&uid=香帅keven&s=2" width="16" height="16" alt="淘宝旺旺" />淘宝旺旺</a></li>');

document.write('<tr><td><li>Tel：+86-18896781687</li></td></tr>');
document.write("</ul>");
document.write("</div>");
document.write("<div class='b'></div>");
document.write("</div>");
document.write("<div id='divMenu' onmouseover='OnlineOver();'><img src='/image/catalog/logo/serviceqq/1.gif' class='press' alt='在线咨询'></div>");
document.write("</div>");

//<![CDATA[
var tips; var theTop = 145/*这是默认高度,越大越往下*/; 
var old = theTop;
function initFloatTips() {
tips = document.getElementById('divQQbox');
moveTips();
};
function moveTips() {var tt=50;
if (window.innerHeight) {pos = window.pageYOffset}
else if (document.documentElement && document.documentElement.scrollTop) {pos = document.documentElement.scrollTop}
else if (document.body) {pos = document.body.scrollTop;}
pos=pos-tips.offsetTop+theTop;
pos=tips.offsetTop+pos/10;
if (pos < theTop) pos = theTop;
if (pos != old) {tips.style.top = pos+"px"; tt=10;}
//alert(tips.style.top);
old = pos; setTimeout(moveTips,tt);}
initFloatTips();
//!]]>


function OnlineOver(){
document.getElementById("divMenu").style.display = "none";
document.getElementById("divOnline").style.display = "block";
document.getElementById("divQQbox").style.width = "170px";}
function OnlineOut(){
document.getElementById("divMenu").style.display = "block";
document.getElementById("divOnline").style.display = "none";}

if(typeof(HTMLElement)!="undefined")    //给firefox定义contains()方法，ie下不起作用
{HTMLElement.prototype.contains=function(obj)   
{while(obj!=null&&typeof(obj.tagName)!="undefind"){ //通过循环对比来判断是不是obj的父元素
if(obj==this) return true; obj=obj.parentNode;}   
return false;};}  
		  
function hideMsgBox(theEvent){ //theEvent用来传入事件，Firefox的方式
if (theEvent){var browser=navigator.userAgent; //取得浏览器属性
if (browser.indexOf("Firefox")>0){ //如果是Firefox
if (document.getElementById('divOnline').contains(theEvent.relatedTarget)) { //如果是子元素
return;}}
//结束函式
 
if (browser.indexOf("MSIE")>0){//如果是IE
if (document.getElementById('divOnline').contains(event.toElement)) { //如果是子元素
return;}}}
//结束函式

/*要执行的操作*/
document.getElementById("divMenu").style.display = "block";
document.getElementById("divOnline").style.display = "none";}