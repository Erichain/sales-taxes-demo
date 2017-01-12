// mutations
import mutationTypes from './mutation-types';
import Vue from 'vue';

export default {
    [mutationTypes.ADD_GOODS_TO_CART](state, goods) {
        if (state.cartGoods.indexOf(goods) > -1) {
            return;
        }
        goods.count = state.goodsCounts[goods.goodsNum]
        state.cartGoods.push(goods);
    },

    [mutationTypes.INITIAL_GOODS_COUNT](state, goodsNum) {
        Vue.set(
            state.goodsCounts,
            goodsNum,
            0
        );
    },

    [mutationTypes.INCREASE_GOODS_COUNT](state, goodsNum) {
        state.goodsCounts[goodsNum]++;
    },

    [mutationTypes.DECREASE_GOODS_COUNT](state, goodsNum) {
        state.goodsCounts[goodsNum]--;
    },

    [mutationTypes.ENTER_GOODS_COUNT](state, { count, goodsNum }) {
        state.goodsCounts[goodsNum] = count;
    }
};
