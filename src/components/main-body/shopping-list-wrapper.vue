<template>
  <div class="wrapper">
    <div class="top">
      <h1>Lista Zakupów</h1>
      <div class="main-input-wrapper">
        <imput-component></imput-component>
        <buttons>Dodaj <font-awesome-icon icon="fa-solid fa-tree" /></buttons>
      </div>
    </div>

    <!-- <top-side></top-side> -->
  </div>
</template>

<script>
import topSide from './top-side.vue';
import imputComponent from '../UI/input-component.vue';
import buttons from '../UI/buttons.vue';

export default {
  components: {
    topSide,
    imputComponent,
    buttons,
  },
};
</script>

<style lang="scss" scoped>
@use '../../assets/colors';
.wrapper {
  height: 100vh;
  width: 100vw;
  background-color: colors.$main-bgc;
  color: colors.$text-color;
  box-shadow: 7px 7px 20px 1px black;
  overflow: hidden;
  z-index: 1;
}

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
  .wrapper {
    height: 616px;
    width: 1000px;
    border-radius: 15px;
  }

  .main-input-wrapper {
    padding: 0rem 6rem;
  }
}
</style>
