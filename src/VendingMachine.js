var vendingMachine = (() => {
  var display = 'INSERT COIN';

  function getDisplay() {
    return display;
  }
  return {
    getDisplay: getDisplay
  };
});