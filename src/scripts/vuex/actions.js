// actions
import mutationTypes from './mutation-types';

export default {
    initialGoodsCount({ commit }) {
        commit(mutationTypes.INITIAL_GOODS_COUNT);
    },

    increaseGoodsCount({ commit }, goods) {
        commit(mutationTypes.INCREASE_GOODS_COUNT, goods);
    },

    decreaseGoodsCount({ commit }, goods) {
        commit(mutationTypes.DECREASE_GOODS_COUNT, goods);
    },

    updateGoodsCountEntered({ commit }, { count, goods }) {
        commit(mutationTypes.UPDATE_GOODS_COUNT_ENTERED, { count, goods });
    },

    clearCart({ commit }) {
        commit(mutationTypes.CLEAR_CART);
    }
};
