// eslint-disable-next-line no-unused-vars
const vendingMachine = () => {
  const coinService = nenaner.coinService.create();
  let temporaryMessage = '';

  function getDisplayFormatForAmountInserted(amountInserted) {
    return `$${Number(amountInserted).toFixed(2)}`;
  }
  function getDisplay() {
    if (temporaryMessage) return temporaryMessage;
    const amountInserted = coinService.getAmountInserted();
    return amountInserted === 0 ? 'INSERT COIN' : getDisplayFormatForAmountInserted(amountInserted);
  }
  function colaButtonPressed() {
    temporaryMessage = coinService.getAmountInserted() === 1 ? 'THANK YOU' : 'PRICE $1.00';
  }

  return {
    insertCoin: coinService.insertCoin,
    getDisplay,
    getCoinReturn: coinService.getReturnedCoin,
    colaButtonPressed,
    getDispenser: () => {}
  };
};
