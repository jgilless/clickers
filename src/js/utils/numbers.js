/**
 * priceCalc calculates an exponential increase in cost
 * @param { Number } value
 * @return { Number }
 */
export const priceCalc = value => {
    return Math.pow(value, 1.05);
};
