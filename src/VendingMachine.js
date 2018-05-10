// eslint-disable-next-line no-unused-vars
const vendingMachine = () => {
  const coinService = nenaner.coinService.create();

  function getDisplayFormatForAmountInserted(amountInserted) {
    return `$${Number(amountInserted).toFixed(2)}`;
  }
  function getDisplay() {
    const amountInserted = coinService.getAmountInserted();
    return amountInserted === 0 ? 'INSERT COIN' : getDisplayFormatForAmountInserted(amountInserted);
  }

  return {
    insertCoin: coinService.insertCoin,
    getDisplay
  };
};
