<template>
    <div>
        <router-link to="/goodslist"
                     class="btn btn-danger btn-lg margin-bottom
                            btn-route no-text-decoration"
        >&lt;&nbsp;Goods List</router-link>
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
                    <td>{{ cartGoods.length === 0 ? '0.00' : getTotalPrice() | toFix }}</td>
                </tr>
            </tfoot>
        </table>
        <button class="btn btn-danger btn-lg float-right"
                @click="clearCart"
                :disabled="cartGoods.length === 0"
        >Clear Cart</button>
    </div>
</template>

<script type="text/babel">

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'cart',

        computed: {
            ...mapGetters(['cartGoods'])
        },

        methods: {
            ...mapActions(['clearCart']),

            // round the last digit up to 5
            roundValueUp(value) {
                let stringedValue = parseFloat(value).toFixed(2),
                    lastNumber = parseFloat(stringedValue.slice(-1)),
                    len = stringedValue.length;
                if (lastNumber > 0 && lastNumber < 5) {
                    lastNumber = 5;
                    return parseFloat(
                        stringedValue.slice(0, len - 1) + lastNumber
                    );
                }
                return value;
            },

            getOriginalPrice(item) {
                return this.roundValueUp(item.count * item.price);
            },

            getTaxes(item) {
                if (!item.isTaxed) {
                    return 0;
                }
                return this.roundValueUp(
                    item.taxRate * item.price * item.count
                );
            },

            getPriceWithTax(item) {
                let value = this.getOriginalPrice(item) + this.getTaxes(item);
                return this.roundValueUp(value);
            },

            getTotalTaxes() {
                let instance = this;
                return this.cartGoods.reduce(function (prev, curr) {
                    return prev + instance.getTaxes(curr);
                }, 0);
            },

            getTotalPrice() {
                let instance = this;
                return this.cartGoods.reduce(function (prev, curr) {
                    return prev + instance.getPriceWithTax(curr);
                }, 0);
            }
        }
    };

</script>
