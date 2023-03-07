<template>
    <div class="home-banner">
        <swiper :navigation="true" :modules="modules" class="swiper-banner" :center-insufficient-slides="true">
            <swiper-slide><img :src="banner1" alt=""></swiper-slide>
            <swiper-slide><img :src="banner2" alt=""></swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper';
const modules = [Navigation]
const onSwiper = (swiper: any) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>

<style scoped>
.home-banner {
    /* max-width: var(--ht-home-wrap-width-large); */
    width: 100%;
    display: block;
    --swiper-theme-color: #e4c17e !important;
}

.swiper-banner img {
    width: 100%;
}
</style>