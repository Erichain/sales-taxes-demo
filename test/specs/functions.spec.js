// functions testing
import { assert } from 'chai';
import testData from '../test-data.json';
import cartFuncs from '../cartFuncs';

const choose1 = testData.choose1;
const choose2 = testData.choose2;
const choose3 = testData.choose3;

describe('Testing functions', function () {
    describe('Testing the first data group', function () {
        it('should calculate the final price with tax', function () {
            for (let i = 0, len = choose1.initialData.length; i++; i< len) {
                assert.equal(
                    cartFuncs.getPriceWithTax(choose1[i]).toFixed(2),
                    choose1.result.prices[i]
                );
            }
        });

        it('should calculate the total taxes', function () {
            assert.equal(
                cartFuncs.getTotalTaxes(choose1.initialData).toFixed(2),
                choose1.result.taxes
            );
        });

        it('should calculate the total price', function () {
            assert.equal(
                cartFuncs.getTotalPrice(choose1.initialData).toFixed(2),
                choose1.result.total
            );
        });
    });

    describe('Testing the second data group', function () {
        it('should calculate the final price with tax', function () {
            for (let i = 0, len = choose2.initialData.length; i++; i< len) {
                assert.equal(
                    cartFuncs.getPriceWithTax(choose2[i]).toFixed(2),
                    choose2.result.prices[i]
                );
            }
        });

        it('should calculate the total taxes', function () {
            assert.equal(
                cartFuncs.getTotalTaxes(choose2.initialData).toFixed(2),
                choose2.result.taxes
            );
        });

        it('should calculate the total price', function () {
            assert.equal(
                cartFuncs.getTotalPrice(choose2.initialData).toFixed(2),
                choose2.result.total
            );
        });
    });

    describe('Testing the third data group', function () {
        it('should calculate the final price with tax', function () {
            for (let i = 0, len = choose3.initialData.length; i++; i< len) {
                assert.equal(
                    cartFuncs.getPriceWithTax(choose3[i]).toFixed(2),
                    choose3.result.prices[i]
                );
            }
        });

        it('should calculate the total taxes', function () {
            assert.equal(
                cartFuncs.getTotalTaxes(choose3.initialData).toFixed(2),
                choose3.result.taxes
            );
        });

        it('should calculate the total price', function () {
            assert.equal(
                cartFuncs.getTotalPrice(choose3.initialData).toFixed(2),
                choose3.result.total
            );
        });
    });
});
