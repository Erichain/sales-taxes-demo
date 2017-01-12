// routers
import GoodsList from '../components/GoodsList.vue';
import Cart from '../components/Cart.vue';

export default [{
    path: '/',
    redirect: '/goodslist',
}, {
    path: '/goodslist',
    component: GoodsList
}, {
    path: '/cart',
    component: Cart
}];
