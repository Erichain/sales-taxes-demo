// actions
import mutationTypes from './mutation-types';

export default {
    initialGoodsCount({ commit }, goodsNum) {
        commit(mutationTypes.INITIAL_GOODS_COUNT, goodsNum);
    },

    addGoodsToCart({ commit }, goods) {
        commit(mutationTypes.ADD_GOODS_TO_CART, goods);
    },

    increaseGoodsCount({ commit }, goodsNum) {
        commit(mutationTypes.INCREASE_GOODS_COUNT, goodsNum);
    },

    decreaseGoodsCount({ commit }, goodsNum) {
        commit(mutationTypes.DECREASE_GOODS_COUNT, goodsNum);
    },

    enterGoodsCounts({ commit }, { count, goodsNum }) {
        commit(mutationTypes.ENTER_GOODS_COUNT, { count, goodsNum });
    }
};
