import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    arrayName: ["tom", "jerry", "jack"],
  },
  getters: {
    //count
    count: (state) => state.count,
  },
  mutations: {
    increment(state) {
      state.count++;
      console.log(state.count);
    },
  },
  actions: {},
  modules: {},
});
