<template>
    <SubBanner :cover-src="'/assets/img/subBanner1.jpg'" :title="'行业新闻'" />
    <div class="ht-news">
        <div class="ht-news-wrap container">
            <div class="ht-article-body">
                <ArticleList />
            </div>
            <div class="ht-recommend-body">
                <Recommned />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SubBanner from '../components/SubBanner.vue'
import ArticleList from '../components/ArticleList/index.vue';
import Recommned from '../components/Recommend/index.vue';
</script>

<style scoped>
.ht-news-wrap {
    display: flex;
    flex-direction: row;
}

.ht-news {
    padding: 30px 0px;
    border-top: 1px solid #f0f2f5;
    background: #f2f2f2;
}


.ht-article-body {
    width: 75%;
}

.ht-recommend-body {
    width: 25%;
    margin-left: 10px;

}


@media screen and (max-width:1024px) {
    .ht-news-wrap {
        flex-direction: column;
        display: flex;
    }

    .ht-article-body {
        width: 100%;
    }

    .ht-recommend-body {
        width: 100%;
        margin-left: 0;
    }
}
</style>