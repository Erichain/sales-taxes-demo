// main entry
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './vuex/store';
import routes from './router';

Vue.use(VueRouter);

Vue.filter('toFix', (value, control = 2) => {
    if (typeof control !== 'number') {
        return value;
    }
    return parseFloat(value).toFixed(control);
});

const router = new VueRouter({
    routes
});

new Vue({
    router,
    store
}).$mount('#app');
