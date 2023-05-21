import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      allProd: [
        {
          id: 'c1',
          name: 'Milk',
        },
        {
          id: 'c2',
          name: 'Eggs',
        },
        {
          id: 'c3',
          name: 'Fish',
        },
      ],
    };
  },
  getters: {
    getAllProd(state) {
      return state.allProd;
    },
    hasProd(_, getters) {
      return getters.getAllProd && getters.getAllProd.length > 0;
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
  },
  mutations: {
    newProdArray(state, payload) {
      state.allProd = payload;
    },
    addProd(state, payload) {
      state.allProd.unshift(payload);
    },
  },
});
export default store;
