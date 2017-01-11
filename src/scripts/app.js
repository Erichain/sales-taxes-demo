// main entry
import Vue from 'vue';
import App from '../components/App.vue';

new Vue({
    components: {
        App
    },
    render: h => h(App)
}).$mount('#app');
