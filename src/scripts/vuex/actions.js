// actions
import mutationTypes from './mutation-types';

export default {
    addGoodsToCart({ commit }, goods) {
        console.log(goods)
        commit(mutationTypes.ADD_GOODS_TO_CART, goods);
    }
};
