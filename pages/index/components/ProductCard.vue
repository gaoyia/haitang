<template>
    <li class="product-item widget-shadow">
        <div class="widget">
            <figure class="widget-header cover">
                <a :href="props.linkHref" :title="props.title" target="_self">
                    <div class="mask">
                    </div>
                    <img class="cover-image" :src="props.coverSrc" alt="props.title" style="">
                </a>
                <figcaption><a :href="props.linkHref" title="props.title" target="_self">{{ props.title }}</a></figcaption>
            </figure>
        </div>
    </li>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    coverSrc: string,
    linkHref: string
}>()
</script>

<style scoped>
.product-item {
    background-color: #fff;
}

.widget {
    margin: 0;
}

.widget-shadow {
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}

.widget {
    position: relative;
    background-color: #fff;
}

.widget .widget-header img {
    -webkit-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
    transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
}

.cover-image {
    width: 100%;
}

figcaption {
    font-size: 16px;
    padding: 20px;
    font-weight: 400;
}

figure a {
    display: block;
    overflow: hidden;
    position: relative;
}

.widget .widget-header:hover .mask {
    background: rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
    transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
}

.widget .widget-header:hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
    transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
}


.widget .widget-header:hover a:after {
    top: 35%;
    opacity: 1;
}

.widget .widget-header a:after {
    content: '+';
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    margin-left: -26px;
    margin-top: 0px;
    display: inline-block;
    position: absolute;
    top: 0%;
    left: 50%;
    z-index: 10;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    -webkit-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
    transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
    opacity: 0;
    color: #fff;
    font-size: 40px;
    text-align: center;
    font-family: "Times New Roman", "微软雅黑";
}

.widget .widget-header:hover .mask {
    background: rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
    transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
}

.widget .widget-header .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
    transition: all 0.6s cubic-bezier(0.17, 0.84, 0.44, 1) 0s;
    z-index: 2;
}
</style>