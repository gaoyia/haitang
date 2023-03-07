<template>
  <SubBanner :cover-src="'/assets/img/subBanner3.jpg'" :title="'产品中心'" />

  <div class="ht-product animsition">
    <div class="container">
      <div class="row">
        <ul class="product-grid">
          <ProductCard v-for="i in 4" :title="'黑胡桃纯实木单人沙发扶手椅'" :cover-src="'/assets/img/product1.jpg'" :link-href="'/'" />
        </ul>
        <!-- <div class="hidden-xs">
          <div class="met_pager">
            <span class="PreSpan">上一页</span><a href="product.html" class="Ahover">1</a><a href="product.html">2</a><a
              href="product.html" class="NextA">下一页</a>
            <span class="PageText">转至第</span>
            <input type="text" id="metPageT" data-pageurl="product.html" value="1">
            <input type="button" id="metPageB" value="页">
          </div>
        </div> -->


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubBanner from '../components/SubBanner.vue'
import ProductCard from '../components/ProductCard.vue';

</script>
<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  margin: 0;
  padding: 30px 0;
}

@media screen and (max-width: 1024px) {
  .product-grid {
    grid-template-columns: auto auto;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding: 10px;
  }
}

.ht-product {
  background-color: #f2f2f2;
}
</style>
