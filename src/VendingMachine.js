// eslint-disable-next-line no-unused-vars
const vendingMachine = () => {
  let display = 'INSERT COIN';
  const coinValues = {
    Nickel: '$0.05',
    Dime: '$0.10',
    Quarter: '$0.25'
  };

  function insertCoin(coinInserted) {
    display = coinValues[coinInserted];
  }
  function getDisplay() {
    return display;
  }
  return {
    insertCoin,
    getDisplay
  };
};
