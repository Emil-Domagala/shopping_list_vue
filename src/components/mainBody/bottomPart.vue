<template>
  <div class="bottom">
    <div class="sub-title">
      <div class="h2"><h2>Produkty</h2></div>
      <div class="warning">Brak produktów do kupienia</div>
    </div>

    <ul class="list">
      <items></items>
    </ul>
  </div>
</template>

<script>
import items from '../listItems/items.vue';

export default {
  components: {
    items,
  },
};
</script>

<style scoped lang="scss">
@use '../../assets/colors';
.bottom {
  // Tu trzeba zczytać h top i odjac od 100vh do max-h
  // max-height: calc(100vh - 156px);
  overflow: scroll;
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
  }
}
</style>
