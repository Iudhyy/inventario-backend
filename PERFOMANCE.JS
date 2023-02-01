// calculator.js
const sum = (a, b) => a + b;

export { sum };

// calculator.spec.js
import { sum } from './calculator.js';

describe('calculator.js', () => {
  it('should return the sum of a and b', () => {
    const a = 1;
    const b = 2;

    const result = sum(a, b);

    expect(result).to.equal(3);
  });
});