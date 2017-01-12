// mutations
import mutationTypes from './mutation-types';

export default {
    [mutationTypes.ADD_GOODS_TO_CART](state, goods) {
        console.log(1212)
        if (state.cartGoods.indexOf(goods) > -1) {
            return;
        }
        state.cartGoods.push(goods);
        console.log(state.cartGoods)
    }
};
