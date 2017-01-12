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
                    <th class="text-align-left">Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in goodsData">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price | toFix }}</td>
                    <td>
                        <button class="btn btn-primary btn-accumulator"
                                @click="increaseGoodsCount(item)"
                        >+</button>
                        <input class="form-input input-sm text-align-center"
                               :value="goodsCounts[item.goodsId]"
                               @input="updateGoodsCountByEntering($event, item)"
                        >
                        <button class="btn btn-danger btn-accumulator"
                                @click="decreaseGoodsCount(item)"
                                :disabled="goodsCounts[item.goodsId] <= 0"
                        >—</button>
                    </td>
                    <td class="text-align-left">
                        <span class="text-size-lg text-primary">
                            {{ goodsCounts[item.goodsId] || 0 }}
                        </span>
                        {{ item.name }}(s) Are Added To Cart.
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link to="/cart"
                     class="btn btn-primary btn-lg
                            no-text-decoration float-right"
        >Checkout</router-link>
        <button class="btn btn-danger btn-lg
                       float-right margin-right"
                @click="resetAllToZero"
                :disabled="ifCanBeReset"
        >Reset All To 0</button>
    </div>
</template>

<script type="text/babel">

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'goods-list',

        computed: {
            ...mapGetters([
                'goodsData',
                'goodsCounts'
            ]),

            ifCanBeReset() {
                for (let key in this.goodsCounts) {
                    if (this.goodsCounts[key] > 0) {
                        return false;
                    }
                }
                return true;
            }
        },

        methods: {
            ...mapActions([
                'clearCart',
                'initialGoodsCount',
                'increaseGoodsCount',
                'decreaseGoodsCount',
                'updateGoodsCountEntered'
            ]),

            updateGoodsCountByEntering(event, goods) {
                let instance = this;
                setTimeout(function () {
                    instance.updateGoodsCountEntered({
                        count: parseInt(event.target.value || 0, 10),
                        goods
                    });
                }, 500);
            },

            resetAllToZero() {
                this.clearCart();
                this.initialGoodsCount();
            }
        },

        created() {
            if (Object.keys(this.goodsCounts).length !== 0) {
                return;
            }
            this.initialGoodsCount();
        }
    }

</script>
