//百度地图三维全景图展示
var panorama = new BMap.Panorama('panorama');
panorama.setPosition(new BMap.Point(116.403925,39.913903)); //坐标点在天安门
var labelPosition = new BMap.Point(116.403925,39.913903);
var labelOptions = {position: labelPosition, altitude:5}; //设置标注点的经纬度位置和高度
var label = new BMap.PanoramaLabel('自定义标注-天安门广场', labelOptions);
panorama.addOverlay(label); //在全景地图里添加该标注
panorama.setPov(label.getPov()); //修改点的视角，朝向该label
label.addEventListener('click', function(){ //给标注点注册点击事件
panorama.setPov({pitch: 10, heading: 14});}); //修改点的视角