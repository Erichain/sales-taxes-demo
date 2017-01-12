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
                    <th>Tax</th>
                    <th>Origin Price</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="item in cartGoods"
                          v-if="cartGoods.length !== 0"
                >
                    <tr v-if="item.quantity !== 0">
                        <td>{{ item.name }}</td>
                        <td>{{ item.count }}</td>
                        <td>{{ getTaxes(item) | toFix }}</td>
                        <td>{{ getOriginalPrice(item) | toFix }}</td>
                        <td>{{ getPriceWithTax(item) | toFix }}</td>
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
                    <td>{{ cartGoods.length === 0 ? '0.00' : getTotalTaxes() | toFix }}</td>
                    <td>Total:</td>
                    <td>{{ cartGoods.length === 0 ? '0.00' : getTotalPrices() | toFix }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script type="text/babel">

    import { mapGetters } from 'vuex';

    export default {
        name: 'cart',

        computed: {
            ...mapGetters(['cartGoods'])
        },

        methods: {
            getOriginalPrice(item) {
                return item.count * item.price;
            },

            getTaxes(item) {
                if (!item.isTaxed) {
                    return 0;
                }
                return item.taxRate * item.price * item.count;
            },

            getPriceWithTax(item) {
                return this.getOriginalPrice(item) + this.getTaxes(item);
            },

            getTotalTaxes() {
                let instance = this;
                return this.cartGoods.reduce(function (prev, curr) {
                    return prev + instance.getTaxes(curr);
                }, 0);
            },

            getTotalPrices() {
                let instance = this;
                return this.cartGoods.reduce(function (prev, curr) {
                    return prev + instance.getPriceWithTax(curr);
                }, 0);
            }
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
