<template>
    <div class="about-us">
        <div class="about-us-wrap container">

            <div class="about_img col-sm-12 col-md-4 col-lg-4 animation-zoomIn appear-no-repeat" data-animate="zoomIn"
                data-plugin="appear" data-repeat="false">
                <img :src="aboutUsImg">
            </div>
            <div class="about_cont">
                <h3>关于我们</h3>
                <p class="sub-title">——About us——</p>
                <div class="desc">
                    实木家具公司于1999年创建于中国长沙，这十多年来一直致力于实木家具的生产的销售，销售主要包括实木座椅/沙发系列、、卧室实木床柜系列、家具实木凳椅产品系列等约100个产品。为了让更多的顾客成为宜家的品牌布道者，实木家具公司的一个重要策略就是销售梦想而不是产品。为了做到这一点，实木家具公司不仅提供广泛、设计精美、实用、低价的产品，而且
                </div>
                <a href="/about" class="more" data-animate="bounceIn"></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import aboutUsImg from './aboutUsImg.jpg'
</script>

<style scoped>
.about-us {
    background-color: #f0f0f0;
    padding: 20px;
    display: flex;
    justify-content: center;
    padding-top: 50px;
}

.about-us .about_img img {
    width: 100%;
    padding-bottom: 20px;
}

.about-us h3 {
    font-size: 24px;
    margin-top: 0px;
    text-align: left;
    margin-bottom: 0px;
    color: #444;
}

.about-us .sub-title {
    font-size: 13px;
    text-align: left;
    color: #848484;
}

.about-us .desc {
    text-indent: 2em;
}

.about-us .about_cont {
    font-size: 14px;
    color: #848484;
    line-height: 1.5;
    padding-left: 30px;
    line-height: 2rem;
}

.about-us-wrap {
    max-width: var(--ht-home-wrap-width-large);
    flex-direction: row;
    display: flex;
    justify-content: center;
}

.more {
    background: url(/assets/img/jiantou.png) repeat 26px -97px;
    width: 148px;
    height: 30px;
    display: block;
    -webkit-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    border: #dfdfdf 1px solid;
    margin-top: 30px;
    cursor: pointer;
}

.more:hover {
    background: url(/assets/img/jiantou.png) no-repeat 26px -127px;
    border-color: #b6b6b6;
}

@media screen and (max-width: 1024px) and (min-width: 768px) {

    .about-us .about_img {
        flex: 2;
    }

    .about-us .about_cont {
        flex: 1;
    }
}

@media screen and (max-width: 768px) {

    .about-us .about_cont {
        font-size: 14px;
        color: #848484;
        line-height: 1.5;
        text-align: left;
        padding: 30px 0;
    }

    .about-us h3 {
        text-align: center;
    }

    .about-us .sub-title {
        text-align: center;
    }

    .about-us-wrap {
        display: flex;
        flex-direction: column;
    }

    .more {
        margin: 0 auto;
        margin-top: 30px;
    }


}
</style>