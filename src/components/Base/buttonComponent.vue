<template>
  <button :class="mode"><slot></slot></button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
@use '../../assets/colors';
button {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 8px;
  background-color: colors.$text-color;
  color: colors.$main-bgc;
  transition: color 0.4s, background-color 0.4s;
  cursor: pointer;
  &:hover {
    background-color: colors.$main-bgc;
    color: colors.$text-color;
  }
}

.main-button {
  width: 100px;
}

// .edit-buttons-wrapper {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   width: 100%;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
//   padding: 0 3rem;
//   .apply-button,
//   .cancel-button {
//     @include button;
//     width: 150px;
//   }
// }
</style>
