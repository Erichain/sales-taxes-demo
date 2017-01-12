// actions
import mutationTypes from './mutation-types';

export default {
    initialGoodsCount({ commit }, goodsId) {
        commit(mutationTypes.INITIAL_GOODS_COUNT, goodsId);
    },

    increaseGoodsCount({ commit }, goods) {
        commit(mutationTypes.INCREASE_GOODS_COUNT, goods);
    },

    decreaseGoodsCount({ commit }, goods) {
        commit(mutationTypes.DECREASE_GOODS_COUNT, goods);
    },

    enterGoodsCounts({ commit }, { count, goods }) {
        commit(mutationTypes.ENTER_GOODS_COUNT, { count, goods });
    },

    clearCart({ commit }) {
        commit(mutationTypes.CLEAR_CART);
    }
};
