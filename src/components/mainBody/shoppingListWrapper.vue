<template>
  <div class="wrapper">
    <top-part></top-part>
    <bottom-part></bottom-part>
  </div>
</template>

<script>
import topPart from './topPart.vue';
import bottomPart from './bottomPart.vue';

export default {
  components: {
    topPart,
    bottomPart,
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
