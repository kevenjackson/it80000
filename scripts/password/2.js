function password() { 
var testV = 1; 
var pass1 = prompt('少年，此乃我村最高机密，未经陈天发允许，不得擅闯，哈哈，还是老老实实对暗号吧.....天王盖地虎',''); 
while (testV < 3) { 
if (!pass1) 
history.go(-1); 
if (pass1 == "pb5201314520") {alert('我甫背陈氏家族 名满天下 人才辈出 人杰地灵'); 
window.location.href="ancestral.php"; break;} 
testV+=1; 
var pass1 = prompt('少年，密码不对还想硬闯，你想的美，门都没有，哈哈！:(',''); } 
if (pass1!="password" & testV ==3) 
history.go(-1); 
return " "; } 
document.write(password()); 