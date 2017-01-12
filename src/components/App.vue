<template>
    <div>
        <goods-list></goods-list>
        <cart></cart>
    </div>
</template>

<script type="text/babel">

    import Cart from './Cart.vue';
    import GoodsList from './GoodsList.vue';

    export default {
        components: {
            Cart,
            GoodsList
        }
    }

</script>
