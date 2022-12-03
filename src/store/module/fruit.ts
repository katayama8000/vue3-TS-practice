import { Module } from "vuex";

import { StateType } from "../index";

type fruitStateType = {
  fruits: string[];
};

export const fruitModule: Module<fruitStateType, StateType> = {
  namespaced: true,
  state: () => ({
    fruits: ["apple", "banana", "orange"],
  }),
  getters: {
    getFruits(state) {
      return state.fruits;
    },
  },
  mutations: {},
  actions: {},
};
