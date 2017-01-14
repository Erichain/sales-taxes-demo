// state and store initializing
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import goodsData from '../goods-data.json';

Vue.use(Vuex);

const state = {
    goodsData,
    cartGoods: [],

    // this attribute is used to save the goods' count
    // through its goods number
    goodsCounts: {}
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
