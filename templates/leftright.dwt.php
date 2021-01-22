<head><meta charset="UTF-8"><base target="_blank">
<!-- TemplateBeginEditable name="head" --><meta name="author" content="陈天发" /><meta name="keywords" content="奔浪网" /><!-- TemplateEndEditable -->
<!-- TemplateBeginEditable name="doctitle" --><title>网站通用信息发布模板</title>

<link rel="stylesheet" type="text/css" href="/cnstyle.css" /><!-- TemplateEndEditable -->
<style>.div1{background: url(/banner.jpg) center no-repeat; background-size: 100% 100%; filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale');}</style>
<script src="/scripts/vue/vue.js"></script>
<script src="/scripts/vue/vueslide.js"></script>
<script src="/scripts/jquery/jquery.js"></script>
<script src="/scripts/jquery/jquerycycle.js"></script>
<script src="/scripts/jquery/jqueryslide.js"></script>
<script src="/scripts/jquery/jqueryzoom.js"></script>
<script src="/scripts/jquery/jqueryelevatezoom.js"></script>
<script src="/scripts/jquery/jqueryqrcode.js"></script>
<script src="/scripts/ajax/ajax.js"></script>
<script src="/scripts/3d/ge1doot.js"></script>
<script src="/scripts/3d/3dimages.js"></script>
<script src="/scripts/3d/ga.js"></script>
<script src="/scripts/3d/imageTransform3D.js"></script>
<script src="/scripts/3d/3dpano.js"></script>
<script src="/scripts/3d/3dconfig.js"></script>
<script src="/scripts/serviceqq/1.js"></script>
<script src="/scripts/serviceqq/2.js"></script>
<script src="/scripts/share/share.js"></script></head><body>

<div class="div1"><!-- TemplateBeginEditable name="11" --><img src="/image/catalog/logo/logo/1.png"><!-- TemplateEndEditable --></div>
<div class="div2" id="1"><script>$("#1").load("/1.php");</script></div>

<div class="div9"><dl class="w25">
<dt><!-- TemplateBeginEditable name="left" --><!-- TemplateEndEditable --></dt>
<!-- TemplateBeginEditable name="1" --><dd id="1"><script>$("#1").load("1.php");</script></dd><!-- TemplateEndEditable -->

<dt>product photo show产品展示</dt>
<dd><ul class="scroll"><!-- TemplateBeginEditable name="4" -->
<li><a href="/www/product/pcsoftware/kaspersky/kav"><img src="/image/catalog/webdesign/4/1.gif"></a></li>
<li><a href="/www/product/pcsoftware/kaspersky/kis"><img src="/image/catalog/webdesign/4/2.gif"></a></li>
<li><a href="/www/product/pcsoftware/kaspersky/kmd"><img src="/image/catalog/webdesign/4/3.gif"></a></li>
<li><a href="/www/product/pcsoftware/kaspersky/kts"><img src="/image/catalog/webdesign/4/4.gif"></a></li>
<li><a href="/www/product/pcsoftware/kaspersky/ksos"><img src="/image/catalog/webdesign/4/5.gif"></a></li>
<li><a href="/www/product/pcsoftware/kaspersky/kes"><img src="/image/catalog/webdesign/4/6.gif"></a></li>
<li><a href="/www/product/pcsoftware/kaspersky/kms"><img src="/image/catalog/webdesign/4/7.gif"></a></li>
<li><a href="/www/product/pcsoftware/kaspersky/ksc"><img src="/image/catalog/webdesign/4/8.gif"></a></li>
<li><a href="/www/product/pcsoftware/eset/eav"><img src="/image/catalog/webdesign/4/9.gif"></a></li>
<li><a href="/www/product/pcsoftware/eset/ess"><img src="/image/catalog/webdesign/4/10.gif"></a></li>
<li><a href="/www/product/pcsoftware/eset/essp"><img src="/image/catalog/webdesign/4/11.gif"></a></li>
<li><a href="/www/product/pcsoftware/eset/emds"><img src="/image/catalog/webdesign/4/12.gif"></a></li><!-- TemplateEndEditable --></ul>
<script>$("dd").slide({mainCell: ".scroll", effect: "left", vis: 8, interTime: 2000,});</script></dd>

<dt>3D-VR show三维全景图展示</dt>
<dd><canvas id="canvas"></canvas></dd>

<dd><canvas id="3d"></canvas>
<script>if (isHTML5possible()) {creatViewer("3d", "/scripts/3d/3dconfig.js", "100%", "100%");}
else {document.getElementById("nonhtml5").style.display = "inline";}
window.onload = function() {document.getElementById("copyRight").style.display = "none";
var aa = document.getElementById("copyRight");aa.innerHTML = "";}</script></dd></dl>

<dl class="w75 left5">
<dt><!-- TemplateBeginEditable name="right" --><!-- TemplateEndEditable --></dt>
<!-- TemplateBeginEditable name="2" --><dd id="2"><script>$("#2").load("2.php");</script></dd><!-- TemplateEndEditable -->
<span id="13"><script>$("#13").load("3.php");</script></span></dl></div>

<div class="div4 img100" id="4"><script>$("#4").load("/4.php");</script></div>
<div class="div4 img100" id="5"><script>$("#5").load("/5.php");</script></div>
<div class="div12" id="6"><script>$("#6").load("/6.php");</script>
<?php require("/count.php"); ?><br></div></body>