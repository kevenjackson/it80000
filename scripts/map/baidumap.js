//百度地图三维全景图定位展示图
var panorama = new BMap.Panorama('panorama');
panorama.setPosition(new BMap.Point(115.41632,25.96204)); //坐标点在天安门
var labelPosition = new BMap.Point(115.41632,25.96204);
var labelOptions = {position: labelPosition, altitude:5}; //设置标注点的经纬度位置和高度
var label = new BMap.PanoramaLabel('自定义标注-天安门广场', labelOptions);
panorama.addOverlay(label); //在全景地图里添加该标注
panorama.setPov(label.getPov()); //修改点的视角，朝向该label
label.addEventListener('click', function(){ //给标注点注册点击事件
panorama.setPov({pitch: 10, heading: 14});}); //修改点的视角









//百度地图GPS坐标单点定位法
var x = 115.41632;
var y = 25.96204;
var ggPoint = new BMap.Point(x,y);
//地图初始化
var bm = new BMap.Map("gpsmappoint");
bm.centerAndZoom(ggPoint, 15);
bm.addControl(new BMap.NavigationControl());
//添加gps marker和label
var markergg = new BMap.Marker(ggPoint);
bm.addOverlay(markergg); //添加GPS marker
var labelgg = new BMap.Label("未转换的GPS坐标（错误）",{offset:new BMap.Size(20,-10)});
markergg.setLabel(labelgg); //添加GPS label
//坐标转换完之后的回调函数
translateCallback = function (data){
if(data.status === 0) {
var marker = new BMap.Marker(data.points[0]);
bm.addOverlay(marker);
var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
marker.setLabel(label); //添加百度label
bm.setCenter(data.points[0]);}}

setTimeout(function(){
var convertor = new BMap.Convertor();
var pointArr = [];
pointArr.push(ggPoint);
convertor.translate(pointArr, 1, 5, translateCallback)}, 1000);










//百度地图多点向目标位置运动导航定位法
var map = new BMap.Map("gpsmapnavigator");
map.centerAndZoom(new BMap.Point(115.41632,25.96204), 15);
var bounds = null;
var linesPoints = null;
var spoi1 = new BMap.Point(115.41632,25.96204);    // 起点1
var spoi2 = new BMap.Point(115.41632,25.96204);    // 起点2
var epoi  = new BMap.Point(115.41632,25.96204);    // 终点
var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/Mario.png", new BMap.Size(32, 70), {imageOffset: new BMap.Size(0, 0)});
function initLine(){
bounds = new Array();
linesPoints = new Array();
map.clearOverlays();                                                    // 清空覆盖物
var driving3 = new BMap.DrivingRoute(map,{onSearchComplete:drawLine});  // 驾车实例,并设置回调
driving3.search(spoi1, epoi);                                       // 搜索一条线路
var driving4 = new BMap.DrivingRoute(map,{onSearchComplete:drawLine});  // 驾车实例,并设置回调
driving4.search(spoi2, epoi);}                                      // 搜索一条线路
function run(){
for(var m = 0;m < linesPoints.length; m++){
var pts = linesPoints[m];
var len = pts.length;
var carMk = new BMap.Marker(pts[0],{icon:myIcon});
map.addOverlay(carMk);
resetMkPoint(1,len,pts,carMk)}
		
function resetMkPoint(i,len,pts,carMk){
carMk.setPosition(pts[i]);
if(i < len)
{setTimeout(function(){i++;
resetMkPoint(i,len,pts,carMk);},100);}}}
	
function drawLine(results){
var opacity = 0.45;
var planObj = results.getPlan(0);
var b = new Array();
var addMarkerFun = function(point,imgType,index,title){
var url;
var width;
var height
var myIcon;
// imgType:1的场合，为起点和终点的图；2的场合为车的图形
if(imgType == 1){
url = "http://lbsyun.baidu.com/jsdemo/img/dest_markers.png";
width = 42;
height = 34;
myIcon = new BMap.Icon(url,new BMap.Size(width, height),{offset: new BMap.Size(14, 32),imageOffset: new BMap.Size(0, 0 - index * height)});}
else{url = "http://lbsyun.baidu.com/jsdemo/img/trans_icons.png";
width = 22;
height = 25;
var d = 25;
var cha = 0;
var jia = 0
if(index == 2){
d = 21;
cha = 5;
jia = 1;}
myIcon = new BMap.Icon(url,new BMap.Size(width, d),{offset: new BMap.Size(10, (11 + jia)),imageOffset: new BMap.Size(0, 0 - index * height - cha)});}
			
var marker = new BMap.Marker(point, {icon: myIcon});
if(title != null && title != ""){marker.setTitle(title);}
// 起点和终点放在最上面
if(imgType == 1){marker.setTop(true);}
map.addOverlay(marker);}
var addPoints = function(points){
for(var i = 0; i < points.length; i++){
bounds.push(points[i]);
b.push(points[i]);}}	
// 绘制驾车步行线路
for (var i = 0; i < planObj.getNumRoutes(); i ++){
var route = planObj.getRoute(i);
if (route.getDistance(false) <= 0){continue;}
addPoints(route.getPath());
// 驾车线路
if(route.getRouteType() == BMAP_ROUTE_TYPE_DRIVING){
map.addOverlay(new BMap.Polyline(route.getPath(), {strokeColor: "#0030ff",strokeOpacity:opacity,strokeWeight:6,enableMassClear:true}));}
else{
// 步行线路有可能为0
map.addOverlay(new BMap.Polyline(route.getPath(), {strokeColor: "#30a208",strokeOpacity:0.75,strokeWeight:4,enableMassClear:true}));}}	
map.setViewport(bounds);	
// 终点
addMarkerFun(results.getEnd().point,1,1);
// 开始点
addMarkerFun(results.getStart().point,1,0);
linesPoints[linesPoints.length] = b;}
initLine();
setTimeout(function(){run();},1500);