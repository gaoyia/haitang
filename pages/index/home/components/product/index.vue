<template>
    <div class="ht-product-body">
        <h3>产品展示</h3>
        <p class="ht-product-desc">——product——</p>

        <swiper :slidesPerView="'auto'" :spaceBetween="0" :freeMode="true" :modules="modules" class="nav-swiper">
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

        <div class="container">
            <div class="row">
                <ul class="product-grid">
                    <ProductCard v-for="i in 4" :title="'黑胡桃纯实木单人沙发扶手椅'" :cover-src="'/assets/img/product1.jpg'"
                        :link-href="'/'" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide, } from 'swiper/vue';
import { FreeMode } from 'swiper';
import ProductCard from '../../../components/ProductCard.vue'
const modules = [FreeMode]
</script>

<style scoped>
:deep(.swiper-wrapper) {
    justify-content: center;
}

@media screen and (max-width:512px) {
    :deep(.swiper-wrapper) {
        justify-content: left;
    }
}

.product-grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    margin: 0;
    padding: 30px 0;
}

@media screen and (max-width: 1024px) {
    .product-grid {
        grid-template-columns: auto auto;
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        padding: 10px;
    }
}

.ht-product-body {
    text-align: center;
    padding: 60px 0;
}

.ht-product-body h3 {
    font-size: 24px;
    margin-top: 0px;
    text-align: center;
    margin-bottom: 0px;
    color: #444;
}

.ht-product-desc {
    font-size: 13px;
    text-align: center;
    width: 80%;
    color: #848484;
    margin: 10px auto;
    font-family: "Microsoft YaHei";
}

.nav-swiper {
    display: flex;
    justify-content: center;
}

.nav-swiper .swiper-slide {
    background: #fff;
    border-radius: 0;
    white-space: nowrap;
    border: #d2d2d2 1px solid;
    font-size: 12px;
    margin-right: 5px;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    color: #76838f;
    width: auto;
}

.nav-swiper .swiper-slide:hover {
    border-color: #e4c17e;
    color: #e4c17e;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    cursor: pointer;
    user-select: none;
}

.nav-swiper .swiper-slide a {
    padding: 8px 30px;
}

.nav-swiper .swiper-slide li {
    display: flex;
}
</style>