/* vueslide v1.1.0	Copyright (C) 2019 4 20, ZhaoGang */

!((document, window, Vue)=> {"use strict"; 
function $ (selector, context){return (context || document).querySelector(selector);};
function $$ (selector, context){return [].slice.call((context || document).querySelectorAll(selector));}

Vue.component("vueslide", {template: `
<div class="vueslide-container" 
:data-custom-arrow="Array.isArray(config.arrow) && config.arrow.join('|')" 
:data-custom-dot="typeof config.dot==='string' && config.dot" 
:data-id="'vueslide-id-' + Date.now() + ~~(Math.random() * 100000000)"
@mouseenter="enter" @mouseleave="leave">
<div class="vueslide-wrapper" :style="wrapperStyle">
<div class="vueslide-box" v-if="config.effect==='slide'" :style="boxStyle(0)"><a :href="data[data.length - 1].href"><img :src="data[data.length - 1].src"></a></div>
<div v-for="(list, index) in data" :class="boxClass(index)" :style="boxStyle(index + 1)"><a :href="list.href"><img :src="list.src"></a></div>
<div class="vueslide-box" v-if="config.effect==='slide'" :style="boxStyle(data.length + 1)"><a :href="data[0].href"><img :src="data[0].src"></a></div></div>
<div class="vueslide-arrow" v-if="config.arrow !==false && !Array.isArray(config.arrow)"><i @click="arrowEvent(0)"></i><i @click="arrowEvent(1)"></i></div>
<div class="vueslide-dot" v-if="config.dot !==false && typeof config.dot !=='string'"><i v-for="(n, index) in data" v-if="index < data.length" :class="dotIClass(index)" @click="dotEvent(index)"></i></div></div>`,

props: ["data", "config"],
computed: {wrapperStyle: function (){return {width: this.config.effect==="slide" ? (`${100 * (this.data.length + 2) }%`) : "100%",
transform: this.config.effect==="slide" && `translateX(-${100 / (this.data.length + 2) }%)`}},
boxClass: function (){return function (index){return {"vueslide-box": true,
"vueslide-box-fade": this.config.effect==="fade" && true,
"vueslide-box-show": this.config.effect==="fade" && index===0,
"vueslide-box-block": this.config.effect==="fade" && index===0}}},
boxStyle: function (){return function (index){return {width: `${this.config.effect !=="slide" ? 100 : (100 / (this.data.length + 2)) }%`,
left: this.config.effect==="slide" && `${100 / (this.data.length + 2) * index }%`}}},
dotIClass: function (){return function (index){return {active: index===0}}}},
methods: {slide: function (index){const ID=window.VueSlideShowIDCache[this.$el.getAttribute("data-id")]; ID.animated=true;
const w=100 / (this.data.length + 2);
const length=this.data.length;

this.dotChange(index, this.config.dot);
if (index===-1){this.dotChange(length - 1, this.config.dot);}
if (index===length){this.dotChange(0, this.config.dot);}
				
const $wrapper=this.$el.querySelector(".vueslide-wrapper"); $wrapper.style.transition="0.7s"; requestAnimationFrame(()=> {$wrapper.style.transform=`translateX(-${w * (index + 1)}%)`;})

const timer=window.setTimeout(()=> {$wrapper.style.transition="0s";
if (index===length){ID.imageIndex=0; $wrapper.style.transform=`translateX(-${w }%)`;}
if (index===-1){ID.imageIndex=length - 1; $wrapper.style.transform=`translateX(-${w * length }%)`;}
window.clearTimeout(timer); ID.animated=false;}, 700)},
fade: function (index){const ID=window.VueSlideShowIDCache[this.$el.getAttribute("data-id")]; ID.animated=true; this.dotChange(index, this.config.dot);
const $box=$$(".vueslide-box", this.$el);
$box.forEach(function (box, item){if (item===index){box.classList.add("vueslide-box-block");
const timer_1=window.setTimeout(function (){box.classList.add("vueslide-box-show"); window.clearTimeout(timer_1);}, 16);}
else {box.classList.remove("vueslide-box-show");
const timer_2=window.setTimeout(function (){box.classList.remove("vueslide-box-block"); window.clearTimeout(timer_2); ID.animated=false;}, 700);}})},
dotChange: function (index, useCustomDot){window.VueSlideShowIDCache[this.$el.getAttribute("data-id")].imageIndex=index;
const $dot=typeof useCustomDot==="string" ? [].slice.call($(useCustomDot).children) : $$(".vueslide-dot i", this.$el);  
$dot.forEach(function (dot, item){dot.classList.remove("active");
if (item===index){dot.classList.add("active");}})},
dotEvent: function (index, useCustomDot){if (!window.VueSlideShowIDCache[this.$el.getAttribute("data-id")].animated){this[this.config.effect==="fade" ? "fade" : "slide"](index); this.dotChange(index, useCustomDot);}},
arrowEvent: function (i){if (!window.VueSlideShowIDCache[this.$el.getAttribute("data-id")].animated){const ID=window.VueSlideShowIDCache[this.$el.getAttribute("data-id")];
if (i){ID.imageIndex++;
if (ID.imageIndex > this.data.length - 1 && this.config.effect !=="slide"){ID.imageIndex=0;}} 
else {ID.imageIndex--;
if (ID.imageIndex < 0 && this.config.effect !=="slide"){ID.imageIndex=this.data.length - 1;}}
if (this.config.effect==="fade"){this.fade(ID.imageIndex);} 
else {this.slide(ID.imageIndex);}}},
enter: function (){this.config.autoplay && window.clearInterval(window.VueSlideShowIDCache[this.$el.getAttribute("data-id")].autoTimer);},
leave: function (){this.config.autoplay && this.play();},
play: function (){window.VueSlideShowIDCache[this.$el.getAttribute("data-id")].autoTimer=window.setInterval(()=> {this.arrowEvent(1);}, ~~this.config.autoplay);}},
mounted: function (){if (!window.VueSlideShowIDCache){window.VueSlideShowIDCache={};}
window.VueSlideShowIDCache[this.$el.getAttribute("data-id")]={imageIndex: 0, animated: false, autoTimer: null};
this.config.autoplay && this.play();

let customArrow=this.$el.getAttribute("data-custom-arrow");
if (customArrow){customArrow=customArrow.split("|");
$(customArrow[0]).onclick=()=> this.arrowEvent(0);
$(customArrow[1]).onclick=()=> this.arrowEvent(1);}

let customDot=this.$el.getAttribute("data-custom-dot");
if (customDot){[].slice.call($(customDot).children).forEach((dot, item)=> {if (item > this.data.length - 1){return;}
dot.onclick=()=> this.dotEvent(item, this.config.dot);})}}});

Vue.prototype.VueSlideShow=function (selector, options){$(selector).innerHTML=`<vueslide :data="images" :config="config"></vueslide>`;
return new Vue({el: selector, data: {images: options.images, config: options.config}});}})(document, window, Vue);