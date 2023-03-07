<template>
    <div class="ht-article">
        <ArticleListItem />
        <ArticleListItem />
        <ArticleListItem />
    </div>
</template>

<script setup lang="ts">
import ArticleListItem from './ArticleListItem.vue';
</script>

<style scoped>
.ht-article {
    padding: 30px;
    background: #ffffff;
    border-bottom: 1px solid #f0f2f5;
    margin-bottom: 30px;
    overflow: hidden;
}

.ht-article {
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    -o-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}

@media screen and (max-width:1024px) {
    .ht-article {
        padding: 10px;
        margin-bottom: 10px;
        width: 100%;
    }
}
</style>