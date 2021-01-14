<?php
 	$path= "/image/catalog/logo/count";
	//图片所在的文件夹子, count是在相应文件夹下
 	$f_name = "count.txt";
	//计数器的数据保存在count.txt
	$n_digit = 10;
 	//如果文件不存在，则新建文件，初始值置为0/
	if(!file_exists($f_name)){
 	$fp=fopen($f_name,"w");
 	fputs($fp,"0");
 	fclose($fp);}
 	$fp=fopen($f_name,"r"); 
	//打开count.txt文件
 	$hits=fgets($fp,$n_digit); 
	//开始计取数据
 	fclose($fp); 
	//关闭文件
 	$hits=(int)$hits + 1;
	//计数器增加1
 	$hits=(string)$hits; 
 	$fp=fopen($f_name,"w");
 	fputs($fp,$hits);
	//写入新的计数
 	fclose($fp); 
	//关闭文件
	//循环读取并显示出图形计数器
	for($i=0;$i<$n_digit;$i++) 
	$hits = str_replace("$i","<img src='$path/$i.gif' $alt>","$hits");
	echo $hits;   
?>