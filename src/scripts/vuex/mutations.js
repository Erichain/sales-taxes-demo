// mutations
import mutationTypes from './mutation-types';

export default {
    [mutationTypes.INCREASE_GOODS_COUNT](state, goods) {
        state.goodsCounts[goods.goodsId]++;
        goods.count = state.goodsCounts[goods.goodsId];
    },

    [mutationTypes.DECREASE_GOODS_COUNT](state, goods) {
        state.goodsCounts[goods.goodsId]--;
        goods.count = state.goodsCounts[goods.goodsId];
    },

    // add goods to cart with entering a number
    [mutationTypes.UPDATE_GOODS_COUNT_ENTERED](state, { count, goods }) {
        state.goodsCounts[goods.goodsId] = count;
        goods.count = count;
    },

    [mutationTypes.CLEAR_CART](state) {
        state.cartGoods = [];
        state.goodsCounts = {};
    },

    [mutationTypes.ADD_GOODS_TO_CART](state, goods) {
        state.cartGoods.push(goods);
    }
};
