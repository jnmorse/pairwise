module.exports = function pairwise(arr, arg) {
  if (arr.length === 0) {
    return 0
  }

  const indices = []

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i !== j) {
        if (indices.indexOf(i) === -1 && indices.indexOf(j) === -1) {
          if (arr[i] + arr[j] === arg) {
            indices.push(i, j)
          }
        }
      }
    }
  }

  return indices.reduce((a, b) => a + b, 0)
}
