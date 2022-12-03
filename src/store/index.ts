// store.ts
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { fruitModule } from "./module/fruit";

export interface StateType {
  [x: string]: any;
  count: number;
  arrayName: string[];
  leftItems: string[];
  rightItems: string[];
}

// インジェクションキーを定義します
export const key: InjectionKey<Store<StateType>> = Symbol();

export const store = createStore<StateType>({
  state: {
    count: 0,
    arrayName: ["tom", "jerry", "jack"],
    leftItems: ["apple", "banana", "orange"],
    rightItems: ["grape", "pear", "watermelon"],
  },
  getters: {
    getArrayName(state) {
      return state.arrayName;
    },
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
        return;
      }
      const item: string = state.leftItems.slice(-1)[0];
      state.rightItems = [...state.rightItems, item];
      state.leftItems = state.leftItems.slice(0, -1);
    },

    moveRightToLeft(state) {
      if (state.rightItems.length === 0) {
        alert("右のリストに要素がありません");
        return;
      }
      const item: string = state.rightItems.slice(-1)[0];
      state.leftItems = [...state.leftItems, item];
      state.rightItems = state.rightItems.slice(0, -1);
      console.log(state.rightItems);
    },
  },
  actions: {},
  modules: {
    fruitModule,
  },
});
