<div class="swiper-wrapper">
<div class="swiper-slide" v-for="image in images"><a :href="image.href"><img :src="image.src"></a></div></div>
<div class="swiper-button-next"></div><div class="swiper-button-prev"></div>

<script>var swiper = new Swiper('.img100', {effect: 'slide', autoplay: {delay: 2000,}, slidesPerView: 4, images: 
{src: require("/image/catalog/logo/adobe/1.gif"),
src: require("/image/catalog/logo/corel/1.gif"),
src: require("/image/catalog/logo/autodesk/1.gif"),
src: require("/image/catalog/logo/apple/1.gif")},
navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',},});</script>