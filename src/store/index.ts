import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    arrayName: ["tom", "jerry", "jack"],
    leftItems: ["apple", "banana", "orange"],
    rightItems: ["grape", "pear", "watermelon"],
  },
  getters: {
    //count
    //count: (state) => state.count,
    //arrayName
    //arrayName: (state) => state.arrayName,
  },
  mutations: {
    increment(state, number) {
      state.count += number;
      console.log(state.count);
    },
    decrement(state, number) {
      state.count -= number;
      console.log(state.count);
    },
    addName(state, name) {
      state.arrayName.push(name);
      //[...state.arrayName, name];
      console.log(state.arrayName);
    },
    //leftItemsの最後の要素をrightItemsに移動
    moveItem(state) {
      const item = state.leftItems.pop();
      state.rightItems.push(item!);
    },
    //RightItemsの最後の要素をleftItemsに移動
    moveItem2(state) {
      const item = state.rightItems.pop();
      state.leftItems.push(item!);
    },
    moveLeftToRight(state) {
      if (state.leftItems.length === 0) {
        alert("左側にアイテムがありません");
      }
      const item: string = state.leftItems.slice(-1)[0];
      state.rightItems = [...state.rightItems, item];
      state.leftItems = state.leftItems.slice(0, -1);
    },

    moveRightToLeft(state) {
      if (state.rightItems.length === 0) {
        alert("右のリストに要素がありません");
      }
      const item: string = state.rightItems.slice(-1)[0];
      state.leftItems = [...state.leftItems, item];
      state.rightItems = state.rightItems.slice(0, -1);
      console.log(state.rightItems);
    },
  },
  actions: {},
  modules: {},
});
