// main entry
import Vue from 'vue';
import App from '../components/App.vue';
import store from './vuex/store';

new Vue({
    store,
    components: {
        App
    },
    render: createElem => createElem(App)
}).$mount('#app');
