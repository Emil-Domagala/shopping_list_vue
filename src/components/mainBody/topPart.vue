<template>
  <div class="top">
    <h1>Shopping list</h1>
    <div class="main-input-wrapper">
      <imputComponent></imputComponent>
      <buttonComponent mode="main-button">Add</buttonComponent>
    </div>
  </div>
</template>

<script>
import imputComponent from '../Base/inputComponent.vue';
import buttonComponent from '../Base/buttonComponent.vue';

export default {
  components: {
    imputComponent,
    buttonComponent,
  },
};
</script>

<style scoped lang="scss">
@use '../../assets/colors';

.top {
  position: sticky;
  top: 0;
  background-color: colors.$dark-bgc;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 9;
  h1 {
    display: block;
    padding: 2rem 1rem;
    font-size: 4rem;
    color: colors.$main-color;
    text-transform: uppercase;
  }
}

.main-input-wrapper {
  width: 100%;
  padding: 0rem 3rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}

@media screen and (min-width: 992px) {
  .main-input-wrapper {
    padding: 0rem 6rem;
  }
}
</style>
