<template>
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
            <tr v-for="item in goodsData">
                <td>{{ item.name }}</td>
                <td>{{ item.price.toFixed(2) }}</td>
                <td></td>
                <td>
                    <button class="btn btn-primary">Add To Cart</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script type="text/babel">

    export default {
        data() {
            return {};
        }
    }

</script>

<style lang="scss">

</style>
