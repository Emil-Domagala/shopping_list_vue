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


.edit-button {
  width: 150px;
}

@media screen and (min-width: 992px) {
  .edit-button {
    width: 200px;
  }
}
</style>
