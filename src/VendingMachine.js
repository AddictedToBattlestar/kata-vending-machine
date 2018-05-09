let vendingMachine = (() => {
  const display = 'INSERT COIN';

  function getDisplay() {
    return display;
  }
  return {
    getDisplay
  };
});
