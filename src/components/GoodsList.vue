<template>
    <table>
        <thead>
            <th>Goods Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
        </thead>
        <tbody>
            <tr v-for="item in goodsData">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td></td>
                <td></td>
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
