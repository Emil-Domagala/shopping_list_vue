<template>
  <button class="main-button"><slot></slot></button>
</template>

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
</style>
