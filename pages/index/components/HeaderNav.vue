<template>
    <div class="navigation" style="background-color: #221f1e; padding: 10px 20px;">
        <div class="navigation-wrap">
            <a href="/" class="logo">
                <img :src="Logo" width="40" height="40" alt="logo" />
            </a>
            <div class="link-list">
                <Link href="/">首页</Link>
                <Link href="/product">产品展示</Link>
                <Link href="/news">行业新闻</Link>
                <Link href="/about">关于我们</Link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Logo from '../../../renderer/logo.svg'
import Link from './Link.vue'
import { isBrowser, usePageContext } from '../../../renderer/usePageContext';
const pageContext = usePageContext()
const view = pageContext.routeParams?.view
</script>
<style scoped>
.navigation-wrap {
    max-width: var(--ht-home-wrap-width-large);
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.8em;
    margin: 0 auto;
}

.navigation {
    box-shadow: 0 10px 30px -10px rgb(0 0 0 / 20%);
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
}


.link-list {
    justify-content: flex-end;
    display: flex;
    width: 100%;
}
</style>
