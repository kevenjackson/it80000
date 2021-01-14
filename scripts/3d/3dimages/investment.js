"use strict";
(function () {var diapo=[], layers=[], ctx, pointer, scr, camera, light, fps=0, quality=[1,2],
Poly=function (parent, face) {
this.parent=parent;
this.ctx=ctx;
this.color=face.fill || false;
this.points=[];
if (!face.img) {
for (var i=0; i < 4; i++) {
this.points[i]=new ge1doot.transform3D.Point(
parent.pc.x + (face.x[i] * parent.normalZ) + (face.z[i] * parent.normalX),
parent.pc.y +  face.y[i],
parent.pc.z + (face.x[i] * parent.normalX) + (-face.z[i] * parent.normalZ));}
this.points[3].next=false;}},
Diapo=function (path, img, structure) {
this.img=new ge1doot.transform3D.Image(
this, path + img.img, 1, {isLoaded: function(img) {img.parent.isLoaded=true; img.parent.loaded(img);}});
this.visible=false;
this.normalX=img.nx;
this.normalZ=img.nz;
this.pc=new ge1doot.transform3D.Point(img.x, img.y, img.z);
this.tx=img.x + (img.nx * Math.sqrt(camera.focalLength) * 20);
this.tz=img.z - (img.nz * Math.sqrt(camera.focalLength) * 20);
this.poly=[];
for (var i=-1, p; p=structure[++i];) {
layers[i]=(p.img=== true ? 1 : 2);
this.poly.push(new Poly(this, p));}},

init=function (json) {Poly.prototype.drawPoly=ge1doot.transform3D.drawPoly;
scr=new ge1doot.Screen({container: "canvas"});
ctx=scr.ctx;
scr.resize();
pointer=new ge1doot.Pointer({
tap: function () {
if (camera.over) {
if (camera.over=== camera.target.elem) {camera.target.x=0; camera.target.z=0; camera.target.elem=false;} 
else {camera.target.elem=camera.over; camera.target.x=camera.over.tx; camera.target.z=camera.over.tz;
for (var i=0, d; d=diapo[i++];) {
var dx=camera.target.x - d.pc.x;
var dz=camera.target.z - d.pc.z;
var dist=Math.sqrt(dx * dx + dz * dz);
var lev=(dist > 1500) ? quality[0] : quality[1]; d.img.setLevel(lev);}}}}});
camera=new ge1doot.transform3D.Camera({
focalLength: Math.sqrt(scr.width) * 10,
easeTranslation: 0.025,
easeRotation: 0.06,
disableRz: true},
{move: function () {this.over=false;
if (pointer.isDraging) {this.target.elem=false; this.target.ry=-pointer.Xi * 0.01; this.target.rx=(pointer.Y - scr.height * 0.5) / (scr.height * 0.5);}
else {if (this.target.elem) {this.target.ry=Math.atan2(this.target.elem.pc.x - this.x, this.target.elem.pc.z - this.z);}}
this.target.rx *= 0.9;}});
camera.z=-10000;
camera.py=0;
for (var i=0, img; img=json.imgdata[i++];) {diapo.push(new Diapo(json.options.imagesPath, img, json.structure));}	
setInterval(function() {quality=(fps > 50) ? [2,3] : [1,2]; fps=0;}, 1000); run();},
run=function () {ctx.clearRect(0, 0, scr.width, scr.height); camera.move();
for (var k=-1, l; l=layers[++k];) {light=false;
for (var i=0, d; d=diapo[i++];) {(l=== 1 && d.draw()) || (d.visible && d.poly[k].draw());}}
if (camera.over && !pointer.isDraging) {scr.setCursor("pointer");} 
else {scr.setCursor("move");}
fps++; requestAnimFrame(run);};
Poly.prototype.draw=function () {var c=this.color;
if (c.light || !light) {var s=c.light ? this.parent.light : 1;
light="rgba(" + Math.round(c.r * s) + "," + Math.round(c.g * s) + "," + Math.round(c.b * s) + "," + (c.a || 1) + ")"; ctx.fillStyle=light;}
if (!c.light || this.parent.light < 1) {for (var i=0; this.points[i++].projection();); this.drawPoly(); ctx.fill();}}
Diapo.prototype.loaded=function (img) {
var d=[-1,1,1,-1,1,1,-1,-1];
var w=img.texture.width  * 0.5;
var h=img.texture.height * 0.5;
for (var i=0; i < 4; i++) {
img.points[i]=new ge1doot.transform3D.Point(this.pc.x + (w * this.normalZ * d[i]), this.pc.y + (h * d[i + 4]), this.pc.z + (w * this.normalX * d[i]));}}
Diapo.prototype.draw=function () {this.pc.projection();
if (this.pc.Z > -(camera.focalLength >> 1) && this.img.transform3D(true)) {
this.light=0.5 + Math.abs(this.normalZ * camera.cosY - this.normalX * camera.sinY) * 0.6; this.visible=true; this.img.draw();
if (pointer.hasMoved || pointer.isDown) {
if (this.img.isPointerInside(pointer.X, pointer.Y))
camera.over=this;}}
else this.visible=false; return true;}
return {load : function (data) {window.addEventListener('load', function () {ge1doot.loadJS("/scripts/3d/imageTransform3D.js", init, data);}, false);}}})().load({imgdata:[
{img:'1.jpg', x:-1000, y:0, z:1500,  nx:0,  nz:1},
{img:'2.jpg', x:0,     y:0, z:1500,  nx:0,  nz:1},
{img:'3.jpg', x:1000,  y:0, z:1500,  nx:0,  nz:1},
{img:'4.jpg', x:1500,  y:0, z:1000,  nx:-1, nz:0},
{img:'5.jpg', x:1500,  y:0, z:0,     nx:-1, nz:0},
{img:'6.jpg', x:1500,  y:0, z:-1000, nx:-1, nz:0},
{img:'7.jpg', x:1000,  y:0, z:-1500, nx:0,  nz:-1},
{img:'8.jpg', x:0,     y:0, z:-1500, nx:0,  nz:-1},
{img:'9.jpg', x:-1000, y:0, z:-1500, nx:0,  nz:-1},
{img:'10.jpg', x:-1500, y:0, z:-1000, nx:1,  nz:0},
{img:'11.jpg', x:-1500, y:0, z:0,     nx:1,  nz:0},
{img:'12.jpg', x:-1500, y:0, z:1000,  nx:1,  nz:0}],
structure:
[{fill: {r:255, g:255, b:255, light:1}, x: [-1001,-490,-490,-1001], z: [-500,-500,-500,-500], y: [500,500,-500,-500]},
{fill: {r:255, g:255, b:255, light:1}, x: [-501,2,2,-500], z: [-500,-500,-500,-500], y: [500,500,-500,-500]},
{fill: {r:255, g:255, b:255, light:1}, x: [0,502,502,0], z: [-500,-500,-500,-500], y: [500,500,-500,-500]},
{fill: {r:255, g:255, b:255, light:1}, x: [490,1002,1002,490], z: [-500,-500,-500,-500], y: [500,500,-500,-500]},
{fill: {r:0, g:0, b:0, a:0.2}, x: [-420,420,420,-420], z: [-500,-500,-500,-500], y: [150, 150,-320,-320]},
{fill: {r:0, g:0, b:0, a:0.2}, x: [-20,20,20,-20], z: [-500,-500,-500,-500], y: [250, 250,150,150]},
{fill: {r:0, g:0, b:0, a:0.2}, x: [-20,20,20,-20], z: [-500,-500,-500,-500], y: [-320, -320,-500,-500]},
{fill: {r:0, g:0, b:0, a:0.2}, x: [-20,20,10,-10], z: [-500,-500,-100,-100], y: [-500, -500,-500,-500]},
{fill: {r:32, g:32, b:32}, x: [-50,50,50,-50], z: [-150,-150,-50,-50], y: [-500,-500,-500,-500]},
{fill: {r:16, g:16, b:16}, x: [-10,10,10,-10], z: [-100,-100,-100,-100], y: [300,300,-500,-500]},
{fill: {r:255, g:255, b:255}, x: [-320,-320,-320,-320], z: [0,-20,-20,0], y: [-190,-190,190,190]},
{fill: {r:255, g:255, b:255}, x: [320,320,320,320], z: [0,-20,-20,0], y: [-190,-190,190,190]},
{img:true},
{fill: {r:255, g:128, b:0}, x: [-50,50,50,-50], z: [450,450,550,550], y: [500,500,500,500]},
{fill: {r:255, g:128, b:0}, x: [-50,50,50,-50], z: [450,450,550,550], y: [-500,-500,-500,-500]}],

options:{imagesPath: "/image/catalog/investment/"}});