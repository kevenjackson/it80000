/* vueslide v1.1.0	Copyright (C) 2019 4 20, ZhaoGang */

"use strict";!function(t,i,e){function o(i,e){return(e||t).querySelector(i)}function a(i,e){return[].slice.call((e||t).querySelectorAll(i))}

e.component("vueslide", {template:
'\n\t\t\t<div \n\t\t\t\tclass="vueslide-container" \n\t\t\t\t:data-custom-arrow="Array.isArray( config.arrow ) && config.arrow.join( \'|\' )" \n\t\t\t\t:data-custom-dot="typeof config.dot === \'string\' && config.dot" \n\t\t\t\t:data-id="\'vueslide-id-\' + Date.now() + ~~(Math.random() * 100000000)"\n\t\t\t\t@mouseenter="enter" \n\t\t\t\t@mouseleave="leave"\n\t\t\t>\n\t\t\t\t <div class="vueslide-wrapper" :style="wrapperStyle">\n\t\t\t\t\t <div class="vueslide-box" v-if="config.effect === \'slide\'" :style="boxStyle( 0 )">\n\t\t\t\t\t\t<a :href="data[ data.length - 1 ].href"><img :src="data[data.length - 1].src"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t <div v-for="( list, index ) in data" :class="boxClass( index )" :style="boxStyle( index + 1 )">\n\t\t\t\t\t\t<a :href="list.href"><img :src="list.src"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t <div class="vueslide-box" v-if="config.effect === \'slide\'" :style="boxStyle( data.length + 1 )">\n\t\t\t\t\t\t<a :href="data[ 0 ].href"><img :src="data[ 0 ].src"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="vueslide-arrow" v-if="config.arrow !== false && !Array.isArray( config.arrow )">\n\t\t\t\t\t<i @click="arrowEvent( 0 )"></i>\n\t\t\t\t\t<i @click="arrowEvent( 1 )"></i>\n\t\t\t\t</div>\n\t\t\t\t <div class="vueslide-dot" v-if="config.dot !== false && typeof config.dot !== \'string\'">\n\t\t\t\t\t<i v-for="( n, index ) in data" v-if="index < data.length" :class="dotIClass( index )" @click="dotEvent( index )"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',

props: ["data", "config"], computed:
{wrapperStyle:function(){return{width: "slide"===this.config.effect?100*(this.data.length+2)+"%":"100%",transform:"slide"===this.config.effect&&"translateX(-"+100/(this.data.length+2)+"%)"}},
boxClass:function(){return function(t){return{"vueslide-box":!0,"vueslide-box-fade":"fade"===this.config.effect&&!0, "vueslide-box-show":"fade"===this.config.effect&&0===t,"vueslide-box-block":"fade"===this.config.effect&&0===t}}},
boxStyle:function(){return function(t){return{width: ("slide"!==this.config.effect?100:100/(this.data.length+2))+"%",left:"slide"===this.config.effect&&100/(this.data.length+2)*t+"%"}}},
dotIClass:function(){return function(t){return{active:0===t}}}},
methods:{slide: function(t){var e=i.VueSlideShowIDCache[this.$el.getAttribute("data-id")];
e.animated=!0;var o=100/(this.data.length+2),a=this.data.length;this.dotChange(t,this.config.dot),-1===t&&this.dotChange(a-1,this.config.dot),t===a&&this.dotChange(0,this.config.dot);
var s=this.$el.querySelector(".vueslide-wrapper");s.style.transition=".7s",requestAnimationFrame(function(){s.style.transform="translateX(-"+o*(t+1)+"%)"});
var n=i.setTimeout(function(){s.style.transition="0s",t===a&&(e.imageIndex=0,s.style.transform="translateX(-"+o+"%)"),-1===t&&(e.imageIndex=a-1,s.style.transform="translateX(-"+o*a+"%)"),i.clearTimeout(n),e.animated=!1},700)},
fade: function(t){var e=i.VueSlideShowIDCache[this.$el.getAttribute("data-id")];e.animated=!0,this.dotChange(t,this.config.dot),a(".vueslide-box",this.$el).forEach(function(o,a){if(a===t){o.classList.add("vueslide-box-block");
var s=i.setTimeout(function(){o.classList.add("vueslide-box-show"),i.clearTimeout(s)},16)}
else{o.classList.remove("vueslide-box-show");
var n=i.setTimeout(function(){o.classList.remove("vueslide-box-block"),i.clearTimeout(n),e.animated=!1},700)}})},
dotChange: function(t,e){i.VueSlideShowIDCache[this.$el.getAttribute("data-id")].imageIndex=t,("string"==typeof e?[].slice.call(o(e).children):a(".vueslide-dot i",this.$el)).forEach(function(i,e){i.classList.remove("active"),e===t&&i.classList.add("active")})},
dotEvent: function(t,e){i.VueSlideShowIDCache[this.$el.getAttribute("data-id")].animated||(this["fade"===this.config.effect?"fade":"slide"](t),this.dotChange(t,e))},
arrowEvent: function(t){if(!i.VueSlideShowIDCache[this.$el.getAttribute("data-id")].animated){var e=i.VueSlideShowIDCache[this.$el.getAttribute("data-id")];t?++e.imageIndex>this.data.length-1&&"slide"!==this.config.effect&&(e.imageIndex=0):--e.imageIndex<0&&"slide"!==this.config.effect&&(e.imageIndex=this.data.length-1),
"fade"===this.config.effect?this.fade(e.imageIndex):this.slide(e.imageIndex)}},enter:function(){this.config.autoplay&&i.clearInterval(i.VueSlideShowIDCache[this.$el.getAttribute("data-id")].autoTimer)},
leave: function(){this.config.autoplay&&this.play()},
play: function(){var t=this;i.VueSlideShowIDCache[this.$el.getAttribute("data-id")].autoTimer=i.setInterval(function(){t.arrowEvent(1)},~~this.config.autoplay)}},
mounted: function(){var t=this;i.VueSlideShowIDCache||(i.VueSlideShowIDCache={}),i.VueSlideShowIDCache[this.$el.getAttribute("data-id")]={imageIndex:0,animated:!1,autoTimer:null},this.config.autoplay&&this.play();
var e=this.$el.getAttribute("data-custom-arrow");
e&&(e=e.split("|"),o(e[0]).onclick=function(){return t.arrowEvent(0)},o(e[1]).onclick=function(){return t.arrowEvent(1)});var a=this.$el.getAttribute("data-custom-dot");a&&[].slice.call(o(a).children).forEach(function(i,e){e>t.data.length-1||(i.onclick=function(){return t.dotEvent(e,t.config.dot)})})}}),
e.prototype.VueSlideShow=function(t,i){return o(t).innerHTML='<vueslide :data="images" :config="config"></vueslide>',
new e({el:t,data:{images:i.images,config:i.config}})}}(document,window,Vue);