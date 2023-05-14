<template>
  <div class="background"></div>
  <shopping-list-wrapper></shopping-list-wrapper>
  <edit-component></edit-component>
</template>

<script>
import shoppingListWrapper from './components/mainBody/shoppingListWrapper.vue';
import editComponent from './components/edit.vue'
export default {
  components: {
    shoppingListWrapper,
    editComponent
  },
};
</script>

<style lang="scss">
@use './assets/colors.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.fa-solid {
  color: white;
  font-size: 2rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  background-color: colors.$dark-bgc;
}

.background {
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
  background-image: url(./assets/tomatoes-gf36e52851_1920.jpg);
  background-size: cover;
  background-position: center;
  z-index: -2;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: colors.$transparent-black;

    z-index: -1;
  }
}
</style>
