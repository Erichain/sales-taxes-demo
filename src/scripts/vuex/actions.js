// actions
import mutationTypes from './mutation-types';
import Vue from 'vue';

export default {
    // initialize goods counts to 0
    initialGoodsCount({ state }) {
        for (let goods of state.goodsData) {
            Vue.set(
                state.goodsCounts,
                goods.goodsId,
                0
            );
        }
    },

    increaseGoodsCount({ commit, state }, goods) {
        if (state.cartGoods.indexOf(goods) < 0) {
            commit(mutationTypes.ADD_GOODS_TO_CART, goods);
        }

        // if cart already has the goods
        // just increase its count
        commit(mutationTypes.INCREASE_GOODS_COUNT, goods);
    },

    decreaseGoodsCount({ commit }, goods) {
        commit(mutationTypes.DECREASE_GOODS_COUNT, goods);
        if (goods.count <= 0) {
            state.cartGoods.splice(
                state.cartGoods.indexOf(goods),
                1
            );
        }
    },

    updateGoodsCountEntered({ commit, state }, { count, goods }) {
        if (state.cartGoods.indexOf(goods) < 0) {
            commit(mutationTypes.ADD_GOODS_TO_CART, goods);
        }
        commit(mutationTypes.UPDATE_GOODS_COUNT_ENTERED, { count, goods });
    },

    clearCart({ commit }) {
        commit(mutationTypes.CLEAR_CART);
    }
};
