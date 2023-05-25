<template>
  <div class="edit-wrapper">
    <div class="h2"><h2>Edit product:</h2></div>
    <div class="edit-input-wrapper">
      <input class="input" type="text" :value="valueOfItem" ref="inputField" />
    </div>
    <p v-if="errorAccured" class="error">Input can not be empty!</p>
    <div class="edit-buttons-wrapper">
      <buttonComponent mode="edit-button" @click="confirmEditItem"
        >Confirm</buttonComponent
      >

      <buttonComponent mode="edit-button" @click="anulujEditItem"
        >Anuluj</buttonComponent
      >
    </div>
    
  </div>
</template>

<script>
import buttonComponent from './Base/buttonComponent.vue';

export default {
  components: {
    buttonComponent,
  },
  data() {
    return {
      valueOfItem: '',
      errorAccured: false,
    };
  },
  props: ['nameProd', 'idProd'],
  created() {
    this.valueOfItem = this.nameProd;
  },
  watch: {
    nameProd() {
      this.valueOfItem = this.nameProd;
      console.log(this.nameProd);
    },
  },
  methods: {
    anulujEditItem() {
      const itemToEdit = {
        id: null,
        name: null,
        showEdit: false,
      };
      this.$store.dispatch('editItem', itemToEdit);
    },
    confirmEditItem() {
      this.errorAccured = false;
      this.valueOfItem = this.$refs.inputField.value.trim();
      if (this.valueOfItem.length === 0) {
        this.errorAccured = true;
        return;
      }
      this.$store.dispatch('editAllProd', {
        id: this.idProd,
        name: this.valueOfItem,
      });
      this.anulujEditItem();
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/colors.scss';
.edit-wrapper {
  position: absolute;
  bottom: 0;
  //   display: none;

  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: colors.$dark-bgc;
  z-index: 9;
  .h2 {
    display: flex;
    justify-content: center;
    margin: 1rem 0 2rem 0;
    // margin-top: 1rem;
    // margin-bottom: 2rem;
    font-size: 1.8rem;

    color: colors.$main-color;
  }
  .edit-input-wrapper {
    width: 100%;
    padding: 0 3rem;
    .input {
      padding: 1rem;
      width: 100%;
      font-size: 1.5rem;
      margin-right: 1rem;
      border: none;
      border-radius: 8px;
    }
  }
  .error {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    color: colors.$warning;
  }
  .edit-buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0 3rem;
  }
}

@media screen and (min-width: 992px) {
  .edit-wrapper {
    bottom: 30px;
    width: 1000px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    .edit-input-wrapper {
      padding: 0 6rem;
    }
  }
}
</style>
