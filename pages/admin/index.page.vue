<template>
  <h1>admin</h1>
    <pre><code>{{ JSON.stringify(pageContext, null, 2) }}</code></pre>
</template>

<script setup>
import { usePageContext } from '../../renderer/usePageContext';

const pageContext = usePageContext()
</script>
<style>
code {
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>
