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
                    <th>Summary</th>
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
                    <td>
                        <span class="text-size-lg text-primary">
                            {{ goodsCounts[item.goodsId] || 0 }}
                        </span>
                        goods added!
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

            updateGoodsCountByEntering(event, goods) {
                let instance = this;
                setTimeout(function () {
                    instance.enterGoodsCounts({
                        count: event.target.value,
                        goods
                    });
                }, 500);
            }
        },

        created() {
            if (Object.keys(this.goodsCounts).length !== 0) {
                return;
            }
            for (let goods of this.goodsData) {
                this.initialGoodsCount(goods.goodsId);
            }
        }
    }

</script>
