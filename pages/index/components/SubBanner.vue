<template>
    <div>
        <div class="ht-banner " style="height: auto;">
            <div class="slick-slide">
                <img class="cover-image" :src="props.coverSrc" sizes="(max-width: 767px) 500px" alt="">
                <div class="banner-text">
                    <div class="container">
                        <div class="banner-text-con">
                            <div>
                                <h1 :style="{ color: props.titleColor }">{{ props.title }}</h1>
                                <p :style="{ color: props.subTitleColor }">{{ props.subTitle }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string,
    subTitle?: string,
    coverSrc: string,
    titleColor?: string
    subTitleColor?: string
}>()
</script>

<style scoped>
.ht-banner {
    width: 100%;
    margin: 0 !important;
    display: table;
    background: #ccc;
}

@media screen and (max-width: 1024px) {
    .met-banner {
        height: 350px;
    }
}

.cover-image {
    width: 100%;
}

.slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
}

.slick-slide {
    outline: none;
}

.ht-banner .slick-slide {
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
}

.ht-banner .slick-slide:first-child {
    display: block;
}

.slick-slide img {
    display: block;
}

.ht-banner .banner-text .container {
    height: 100%;
    display: table;
    text-align: center;
}

.ht-banner .banner-text .container .banner-text-con {
    display: table-cell;
    vertical-align: middle;
}

.ht-banner .container .banner-text-con {
    width: 60%;
}

.ht-banner .banner-text .container {
    height: 100%;
    display: table;
    text-align: center;
}


.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media screen and (min-width: 768px) {
    .container {
        width: 750px;
    }
}

.container {
    max-width: 100%;
}

.ht-banner .banner-text .container {
    height: 100%;
    display: table;
    text-align: center;
}

.ht-banner .banner-text {
    color: #fff;
    font-weight: 400;
    text-shadow: 2px 3px 1px #ccc;
    ;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.ht-banner .banner-text h1 {
    font-weight: 400;
    margin: 0.2em;
}

.ht-banner .banner-text p {
    font-size: 20px;
    margin: 0;
}

@media screen and (min-width: 1024px) {

    .ht-banner .banner-text h1 {
        font-size: 45px;
    }
}
</style>