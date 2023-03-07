<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>
<style scoped>
a {
  padding: 3px 10px;
  color: #e4c17e !important;
  font-size: var(--ht-font-size-small);
}

a.active {
  background-color: #e4c17e38;
}
</style>
<script lang="ts" setup>
import { usePageContext } from '../../../renderer/usePageContext';

const pageContext = usePageContext()
</script>
