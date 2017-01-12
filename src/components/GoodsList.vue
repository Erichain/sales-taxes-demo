<template>
    <table class="table">
        <caption>
            <h4>Goods List</h4>
        </caption>
        <thead>
            <tr>
                <th>Goods Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in goodsData">
                <td>{{ item.name }}</td>
                <td>{{ item.price.toFixed(2) }}</td>
                <td>
                    <button class="btn btn-primary btn-accumulator">+</button>
                    <input class="form-input input-sm">
                    <button class="btn btn-danger btn-accumulator">—</button>
                </td>
                <td>
                    <button class="btn btn-primary">Add To Cart</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script type="text/babel">

    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {};
        },

        computed: {
            ...mapGetters(['goodsData'])
        }
    }

</script>

<style lang="scss">

</style>
