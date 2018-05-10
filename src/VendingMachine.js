// eslint-disable-next-line no-unused-vars
const vendingMachine = () => {
  const coinValues = {
    Nickel: 0.05,
    Dime: 0.1,
    Quarter: 0.25
  };
  let amountInserted = 0;

  function insertCoin(coinInserted) {
    amountInserted += coinValues[coinInserted];
  }
  function getDisplay() {
    return amountInserted === 0 ? 'INSERT COIN' : getDisplayFormatForAmountInserted();
  }
  function getDisplayFormatForAmountInserted() {
    return `$${Number(amountInserted).toFixed(2)}`;
  }

  return {
    insertCoin,
    getDisplay
  };
};
