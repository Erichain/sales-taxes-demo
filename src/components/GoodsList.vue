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
                                @click="increaseGoodsCount(item.goodsNum)"
                        >+</button>
                        <input class="form-input input-sm"
                               :value="goodsCounts[item.goodsNum]"
                               @input="updateGoodsCountByEntering($event, item.goodsNum)"
                        >
                        <button class="btn btn-danger btn-accumulator"
                                @click="decreaseGoodsCount(item.goodsNum)"
                                :disabled="goodsCounts[item.goodsNum] <= 0"
                        >—</button>
                    </td>
                    <td>
                        <button class="btn btn-primary"
                                @click="addGoodsToCart(item)"
                                :disabled="goodsCounts[item.goodsNum] <= 0"
                        >Add To Cart</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link to="/cart"
                     class="btn btn-primary btn-route float-right"
        >Checkout</router-link>
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
            ])
        },

        methods: {
            ...mapActions([
                'addGoodsToCart',
                'initialGoodsCount',
                'increaseGoodsCount',
                'decreaseGoodsCount',
                'enterGoodsCounts'
            ]),

            updateGoodsCountByEntering(event, goodsNum) {
                this.enterGoodsCounts({
                    count: event.target.value,
                    goodsNum
                });
            }
        },

        created() {
            for (let goods of this.goodsData) {
                this.initialGoodsCount(goods.goodsNum);
            }
        }
    }

</script>
