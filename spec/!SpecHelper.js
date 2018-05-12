// Credit to past katas with Guy Royse for the below sugarFn segment of this SpecHelper file
const sugarFn = function translateToDescribeStatement(term) {
  return function blockToTranslate(desc, fn) {
    return describe(`${term} ${desc}`, fn);
  };
};

const when = sugarFn('when'); // eslint-disable-line no-unused-vars
const and = sugarFn('and'); // eslint-disable-line no-unused-vars
