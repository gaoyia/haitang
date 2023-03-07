<template>
    <div class="ht-news-body">
        <h3>新闻资讯</h3>
        <p class="ht-news-desc">——news——</p>
        <div class="ht-news-index-list">
            <ArticleList />
        </div>
    </div>
</template>

<script setup lang="ts">
import ArticleList from '../../../components/ArticleList/index.vue'
</script>

<style scoped>
.ht-news-body {
    text-align: center;
    padding: 60px 0;
}

.ht-news-body h3 {
    font-size: 24px;
    margin-top: 0px;
    text-align: center;
    margin-bottom: 0px;
    color: #444;
}

.ht-news-desc {
    font-size: 13px;
    text-align: center;
    width: 80%;
    color: #848484;
    margin: 10px auto;
    font-family: "Microsoft YaHei";
}

.ht-news-index-list {
    max-width: 1024px;
    margin: 0 auto;
    text-align: left;
}
</style>