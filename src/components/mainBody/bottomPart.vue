<template>
  <div class="bottom">
    <div class="sub-title">
      <div class="h2"><h2>Products</h2></div>
      <div class="warning" v-if="!hasAnyProduct">
        Brak produktów do kupienia
      </div>
    </div>

    <ul class="list" v-if="!!hasAnyProduct">
      <items
        v-for="prod in allProducts"
        :key="prod.id"
        :id="prod.id"
        :prodName="prod.name"
      ></items>
    </ul>
  </div>
</template>

<script>
import items from '../listItems/items.vue';

export default {
  components: {
    items,
  },
  computed: {
    allProducts() {
      return this.$store.getters.getAllProd;
    },
    hasAnyProduct() {
      return this.$store.getters.hasProd;
    },
  },
};
</script>

<style scoped lang="scss">
@use '../../assets/colors';
.bottom {
  // Tu trzeba zczytać h top i odjac od 100vh do max-h

  .sub-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    .h2 {
      margin-bottom: 1rem;
      font-size: 1.8rem;
      color: colors.$main-color;
    }
    .warning {
      font-size: 1.8rem;
    }
  }
  .list {
    padding: 0 2rem 1.5rem 2rem;
    max-height: calc(100vh - 156px);
    overflow: scroll;
    scroll-behavior: smooth;
  }
}
</style>
