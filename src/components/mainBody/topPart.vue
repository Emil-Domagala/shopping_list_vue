<template>
  <div class="top">
    <h1>Shopping list</h1>
    <div class="main-input-wrapper">
      <input
        class="input"
        type="text"
        placeholder="Wpisz produkt..."
        ref="inputField"
        :value="inputContent"
      />
      <buttonComponent mode="main-button" @click="addProduct"
        >Add</buttonComponent
      >
    </div>
    <p v-if="errorAccured" class="error">Input cannot be empty!</p>
  </div>
</template>

<script>
import buttonComponent from '../Base/buttonComponent.vue';

export default {
  components: {
    buttonComponent,
  },
  data() {
    return {
      inputContent: null,
      errorAccured: false,
    };
  },
  methods: {
    addProduct() {
      this.errorAccured = false;
      this.inputContent = this.$refs.inputField.value.trim();
      if (this.inputContent.length === 0) {
        this.errorAccured = true;
        return;
      }
      this.$store.dispatch('addItem', this.inputContent);
      this.inputContent = null;
    },
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
  .error {
    margin-bottom: 1rem;
    color: colors.$warning;
  }
}

.main-input-wrapper {
  width: 100%;
  padding: 0rem 3rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  .input {
    padding: 1rem;
    width: 100%;
    font-size: 1.5rem;
    margin-right: 1rem;
    border: none;
    border-radius: 8px;
  }
}

@media screen and (min-width: 992px) {
  .main-input-wrapper {
    padding: 0rem 6rem;
  }
}
</style>
