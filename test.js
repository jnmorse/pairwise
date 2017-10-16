const {
  assert: {
    exists,
    strictEqual
  }
} = require('chai')

describe('pairwise', () => {
  let pairwise

  before('Should be importable', () => {
    pairwise = require('./index.js') // eslint-disable-line global-require

    exists(pairwise)
  })

  it('should be a function', () => {
    strictEqual(typeof pairwise, 'function')
  })

  it('should calculate the correct results', () => {
    strictEqual(
      pairwise([1, 4, 2, 3, 0, 5], 7),
      11,
      'when giving [1, 4, 2, 3, 0, 5], 7'
    )

    strictEqual(pairwise([1, 3, 2, 4], 4), 1, 'when giving [1, 3, 2, 4], 4')

    strictEqual(pairwise([1, 1, 1], 2), 1, 'when giving [1, 1, 1], 2')

    strictEqual(
      pairwise([0, 0, 0, 0, 1, 1], 1),
      10,
      'when giving [0, 0, 0, 0, 1, 1], 1'
    )

    strictEqual(pairwise([], 100), 0, 'when giving [], 100')

    strictEqual(pairwise([1, 3], 2), 0, 'when no match possible, get 0')
  })
})
