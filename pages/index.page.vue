<template>
    <div class="navigation">
      <a href="/" class="logo">
        <img :src="Logo" height="64" width="64" alt="logo" />
      </a>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>

    <div class="content">
      <div style="margin-top: 20px; border: 1px solid black; padding: 10px 50px">
        
        <Home v-if="view === 'index'" />
        <About v-if="view === 'about'" />
      </div>
    </div>
</template>

<script lang="ts" setup>
import Logo from '../renderer/logo.svg'
import Link from './Link.vue'
import Home from './Home.vue'
import About from './about/index.vue'
import { isBrowser, usePageContext } from '../renderer/usePageContext';
const pageContext = usePageContext()
const view = pageContext.routeParams?.view
</script>
<style scoped>
.content {
  padding: 20px;
  border-left: 2px solid #eee;
  padding-bottom: 50px;
  min-height: 100vh;
}
.navigation {
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8em;
}
.logo {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
