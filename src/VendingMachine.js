// eslint-disable-next-line no-unused-vars
const vendingMachine = () => {
  let display = 'INSERT COIN';
  function insertCoin(coinInserted) {
    display = coinInserted === 'Nickel' ? '$0.05' : '$0.10';
  }
  function getDisplay() {
    return display;
  }
  return {
    insertCoin,
    getDisplay
  };
};
