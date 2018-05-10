// Credit to past katas with Guy Royse for the below sugarFn segment of this SpecHelper file
const sugarFn = function(term) {
  return function(desc, fn) {
    return describe(`${term} ${desc}`, fn);
  };
};

const when = sugarFn('when');
const and = sugarFn('and');
