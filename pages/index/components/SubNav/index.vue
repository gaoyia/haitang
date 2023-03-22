<template>
    <div>
        {{ commonStore.count }}
        <swiper :slidesPerView="'auto'" :spaceBetween="0" :freeMode="true" :modules="modules" class="sub-nav-swiper"
            :scrollbar="{ draggable: true }">
            <swiper-slide>
                <li>
                    <a href="/product" title="床品">床品</a>
                </li>
            </swiper-slide>
            <swiper-slide>
                <li>
                    <a href="/product" title="沙发">沙发</a>
                </li>
            </swiper-slide>
            <swiper-slide>
                <li>
                    <a href="/product" title="椅凳">椅凳</a>
                </li>
            </swiper-slide>
            <swiper-slide>
                <li>
                    <a href="/product" title="柜架">柜架</a>
                </li>
            </swiper-slide>
            <swiper-slide>
                <li>
                    <a href="/product" title="桌子">桌子</a>
                </li>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Scrollbar } from 'swiper';
import 'swiper/css/scrollbar';
import { useCommonStore } from '../../../../store/common';
const modules = [FreeMode, Scrollbar]


const commonStore = useCommonStore()
</script>

<style scoped>
.sub-nav-swiper {
    padding-bottom: 6px;
}
</style>