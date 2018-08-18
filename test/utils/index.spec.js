import test from 'ava';
import { priceCalc } from '../../src/js/utils/numbers';

test('priceCalc should return a number', t => {
    const result = priceCalc(6);
    t.is(typeof result, 'number');
});
