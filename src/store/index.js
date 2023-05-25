import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      allProd: [
       
      ],
      itemToEdit: {
        id: null,
        name: null,
        showEdit: false,
      },
    };
  },
  getters: {
    getAllProd(state) {
      return state.allProd;
    },
    hasProd(_, getters) {
      return getters.getAllProd && getters.getAllProd.length > 0;
    },
    getItemToEdit(state) {
      return state.itemToEdit;
    },
  },
  actions: {
    addItem(context, data) {
      const prodId = new Date().getTime().toLocaleString();
      const newProd = {
        id: prodId,
        name: data,
      };
      context.commit('addProd', newProd);
    },
    deleteItem(context, data) {
      const allProd = context.getters.getAllProd;
      const newProdArray = allProd.filter((prod) => prod.id !== data);
      context.commit('newProdArray', newProdArray);
    },
    editItem(context, data) {
      context.commit('editItem', data);
    },
    editAllProd(context, data) {
      const allProd = context.getters.getAllProd;
      const newProdArray = allProd.map((prod) => {
        if (prod.id === data.id) {
          prod = data;
        }
        return prod;
      });

      context.commit('newProdArray', newProdArray);
    },
  },
  mutations: {
    newProdArray(state, payload) {
      state.allProd = payload;
    },
    addProd(state, payload) {
      state.allProd.unshift(payload);
    },
    editItem(state, payload) {
      state.itemToEdit = payload;
    },
  },
});
export default store;
