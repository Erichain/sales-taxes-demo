// mutations testing
import { assert } from 'chai';
import mutations from '../../src/scripts/vuex/mutations';
import mutationTypes from '../../src/scripts/vuex/mutation-types';
import goodsData from '../../src/scripts/goods-data.json';

const state = {
    goodsData,
    goodsCounts: {},
    cartGoods: []
};
const goods = state.goodsData[Math.floor(Math.random() * 10)];
const input = 12;

describe('Testing mutations', function () {
    beforeEach(function () {
        mutations[mutationTypes.INITIAL_GOODS_COUNT](state);
    });

    describe('Initial goods count', function () {
        it('should be 0', function () {
            for (let key in state.goodsCounts) {
                assert.equal(state.goodsCounts[key], 0);
            }
        });
    });

    describe('Add goods to cart', function () {
        it('should add the none existed goods to cart', function () {
            mutations[mutationTypes.ADD_GOODS_TO_CART](state, goods);
            assert.equal(state.cartGoods[0], goods);
        });
    });

    describe('Increase goods\'s count', function () {
        it('should increase the specific goods\'s count', function () {
            goods.count = 1;
            state.goodsCounts[goods.goodsId] = 1;
            mutations[mutationTypes.INCREASE_GOODS_COUNT](state, goods);
            assert.equal(goods.count, 2);
            assert.equal(state.goodsCounts[goods.goodsId], 2);
        });
    });

    describe('Decrease goods\'s count', function () {
        it('should decrease the specific goods\'s count', function () {
            goods.count = 5;
            state.goodsCounts[goods.goodsId] = 5;
            mutations[mutationTypes.DECREASE_GOODS_COUNT](state, goods);
            assert.equal(state.goodsCounts[goods.goodsId], 4);
            assert.equal(goods.count, 4);
        });
    });

    describe('Get goods count through input', function () {
        it('should equal to input number', function () {
            mutations[mutationTypes.UPDATE_GOODS_COUNT_ENTERED](state, {
                count: input, goods
            });
            assert.equal(state.goodsCounts[goods.goodsId], input);
            assert.equal(goods.count, input);
        });
    });

    describe('Clear the cart', function () {
        it('should clear the cart', function () {
            mutations[mutationTypes.CLEAR_CART](state);
            assert.equal(state.cartGoods.length, 0);
            assert.equal(Object.keys(state.goodsCounts).length, 0);
        });
    });

    describe('Remove the specific goods', function () {
        it('should find the goods and remove it', function () {
            state.cartGoods = goodsData;
            mutations[mutationTypes.REMOVE_CART_GOODS](state, goods);
            assert.notInclude(
                state.cartGoods,
                goods,
                'Cart not include the goods'
            );
        });
    });
});