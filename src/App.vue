<template>
  <div class="background"></div>
  <shopping-list-wrapper></shopping-list-wrapper>
  <transition>
    <edit-component
      v-if="itemToEdit.showEdit"
      :nameProd="itemToEdit.name"
      :idProd="itemToEdit.id"
    ></edit-component>
  </transition>
</template>

<script>
import shoppingListWrapper from './components/mainBody/shoppingListWrapper.vue';
import editComponent from './components/edit.vue';
export default {
  components: {
    shoppingListWrapper,
    editComponent,
  },
  computed: {
    itemToEdit() {
      return this.$store.getters.getItemToEdit;
    },
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
</style>
