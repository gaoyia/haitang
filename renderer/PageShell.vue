<template>
              <div class="dev-view">
                view:{{ pageContext.routeParams?.view }}<br>
                urlPathname:{{ pageContext.urlPathname }}
              </div>
  <div class="layout">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { isBrowser, usePageContext } from '../renderer/usePageContext';
const pageContext = usePageContext()
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.dev-view {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: rgba(185, 74, 137,0.3);
  padding: 10px;
}
</style>
