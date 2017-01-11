<template>
    <div>
        <cart></cart>
        <goods-list></goods-list>
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

<style lang="scss">

    input {
        border: 1px solid red;
    }

</style>
