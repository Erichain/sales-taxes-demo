// mutations
import mutationTypes from './mutation-types';
import Vue from 'vue';

export default {
    // initialize goods counts to 0
    [mutationTypes.INITIAL_GOODS_COUNT](state, goodsId) {
        Vue.set(
            state.goodsCounts,
            goodsId,
            0
        );
    },

    [mutationTypes.INCREASE_GOODS_COUNT](state, goods) {
        state.goodsCounts[goods.goodsId]++;
        goods.count = state.goodsCounts[goods.goodsId];
        if (state.cartGoods.indexOf(goods) > -1) {
            return;
        }
        state.cartGoods.push(goods);
    },

    [mutationTypes.DECREASE_GOODS_COUNT](state, goods) {
        if (!goods.count || goods.count === 0) {
            return;
        }
        state.goodsCounts[goods.goodsId]--;
        goods.count = state.goodsCounts[goods.goodsId];
    },

    // add goods to cart with entering a number
    [mutationTypes.ENTER_GOODS_COUNT](state, { count, goods }) {
        state.goodsCounts[goods.goodsId] = count;
        goods.count = count;
    },

    [mutationTypes.CLEAR_CART](state) {
        state.cartGoods = [];
        state.goodsCounts = {};
    }
};
