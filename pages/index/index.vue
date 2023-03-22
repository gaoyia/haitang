<template>
  <HeaderNav />
  <div class="ht-content">
    <Home v-if="view === 'index'" />
    <About v-else-if="view === 'about'" />
    <Product v-else-if="view === 'product'" />
    <News v-else-if="view === 'news'" />
    <h3 v-else>404</h3>
  </div>
  <FooterNav />
</template>

<script lang="ts" setup>
import HeaderNav from './components/HeaderNav.vue';
import FooterNav from './components/FooterNav.vue';
import Home from './home/index.vue'
import About from './about/index.vue'
import Product from './product/index.vue'
import News from './news/index.vue'
import { isBrowser, usePageContext } from '../../renderer/usePageContext';
const pageContext = usePageContext()
const view = pageContext.routeParams?.view
// if (!view) {
//   pageContext
// }
pageContext.exports.documentProps = {
  title: '11111',
  description: '33333'
}
</script>
<style scoped>
.ht-content {
  padding-bottom: 50px;
  min-height: 100vh;
  margin: 0 auto;
  display: contents;
}
</style>
