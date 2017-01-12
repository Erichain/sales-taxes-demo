<template>
    <div>
        <router-link to="/goodslist"
                     class="btn btn-danger btn-route"
        >◁ Goods List</router-link>
        <table class="table">
            <caption>
                <h4>Cart</h4>
            </caption>
            <thead>
                <tr>
                    <th>Goods Name</th>
                    <th>Quantity</th>
                    <th>Origin Price</th>
                    <th>Tax</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="item in cartGoods"
                          v-if="cartGoods.length !== 0"
                >
                    <tr v-if="item.quantity !== 0">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price.toFixed(2) }}</td>
                        <td>{{ 43343 }}</td>
                        <td>{{ 947394 }}</td>
                        <td>{{ 23232 }}</td>
                    </tr>
                </template>
                <template v-if="cartGoods.length === 0">
                    <tr>
                        <td colspan="5" class="text-secondary">
                            You haven't add any goods to your cart.
                        </td>
                    </tr>
                </template>
            </tbody>
            <tfoot>
                <tr class="text-bold">
                    <td>Receipt</td>
                    <td>Sales Taxes:</td>
                    <td>{{ 232 }}</td>
                    <td>Total:</td>
                    <td>{{ 2434 }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script type="text/babel">

    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {};
        },

        computed: {
            ...mapGetters(['cartGoods'])
        }
    }

</script>

<style lang="scss" scoped>

    @import "../styles/shared/variables";

    .btn-route {
        margin-bottom: 20px;
    }

    .receipt-summary {
        font-weight: bold;
    }

</style>
