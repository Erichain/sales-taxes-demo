<template>
    <div>
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
                    <button class="btn btn-primary btn-accumulator"
                            @click="increaseGoodsCount(item.modelName)"
                    >+</button>
                    <input class="form-input input-sm"
                           v-model="cart[item.modelName]"
                    >
                    <button class="btn btn-danger btn-accumulator"
                            @click="decreaseGoodsCount"
                    >—</button>
                </td>
                <td>
                    <button class="btn btn-primary">Add To Cart</button>
                </td>
            </tr>
            </tbody>
        </table>
        <router-link to="/cart"
                     class="btn btn-primary btn-route"
        >Checkout</router-link>
    </div>
</template>

<script type="text/babel">

    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                cart: {
                    book: 0
                }
            };
        },

        computed: {
            ...mapGetters(['goodsData'])
        },

        methods: {
            increaseGoodsCount(model) {
                console.log(model)
                console.log(this.cart[model])
                if (typeof this.cart[model] === 'undefined') {
                    this.cart[model] = 0;
                }
                this.cart[model]++;
            },

            decreaseGoodsCount() {}
        }
    }

</script>

<style lang="scss" scoped>

    @import "../styles/shared/variables";

    .btn-route {
        float: right;
    }

</style>
