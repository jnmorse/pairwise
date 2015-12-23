module.exports = function (arr, arg) {
  if (arr.length === 0) {
    return 0;
  }

  var indices = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (indices.indexOf(i) === -1 && indices.indexOf(j) === -1) {
          if (arr[i] + arr[j] === arg) {
            indices.push(i, j);
          }
        }
      }
    }
  }

  return indices.reduce(function(a, b) {
    return a + b;
  });
}
