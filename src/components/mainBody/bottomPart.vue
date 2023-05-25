<template>
  <div class="bottom">
    <div class="sub-title">
      <div class="h2"><h2>Products</h2></div>
      <div class="warning" v-if="!hasAnyProduct">No products to buy yet</div>
    </div>

    <ul class="list" v-if="!!hasAnyProduct">
      <transition-group tag="ul">
      <items
        v-for="prod in allProducts"
        :key="prod.id"
        :id="prod.id"
        :prodName="prod.name"
      ></items>
      </transition-group>
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
  overflow: scroll;
  scroll-behavior: smooth;

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
  }
}

.v-leave-to,
.v-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.v-leave-active,
.v-enter-active {
  transition: opacity 0.3s, transform 0.3s;
}
.v-leave-from,
.v-enter-to {
  opacity: 1;
  transform: scale(1);
}

@media screen and (min-width: 992px) {
  .bottom {
    height: 460px;
  }
}
</style>
