// actions
import mutationTypes from './mutation-types';

export default {
    initialGoodsCount({ commit }) {
        commit(mutationTypes.INITIAL_GOODS_COUNT);
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
            commit(mutationTypes.REMOVE_CART_GOODS, goods);
            return;
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
