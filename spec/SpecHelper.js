// Credit to past katas with Guy Royse for the below sugarFn segment of this SpecHelper file
var sugarFn = function (term) {
  return function (desc, fn) {
    return describe(term + ' ' + desc, fn);
  }
};

var when = sugarFn('when');
var when = sugarFn('and');