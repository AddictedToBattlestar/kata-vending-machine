// eslint-disable-next-line no-unused-vars
const vendingMachine = () => {
  const coinService = nenaner.coinService.create();
  let temporaryMessage = '';
  let dispenser;

  function getDisplayFormatForAmountInserted(amountInserted) {
    return `$${Number(amountInserted).toFixed(2)}`;
  }
  function getDisplay() {
    if (temporaryMessage) return temporaryMessage;
    const amountInserted = coinService.getAmountInserted();
    return amountInserted === 0 ? 'INSERT COIN' : getDisplayFormatForAmountInserted(amountInserted);
  }
  function colaButtonPressed() {
    if (coinService.getAmountInserted() === 1) {
      temporaryMessage = 'THANK YOU';
      dispenser = 'Cola';
    } else {
      temporaryMessage = 'PRICE $1.00';
    }
  }
  function getDispenser() {
    return dispenser;
  }

  return {
    insertCoin: coinService.insertCoin,
    getDisplay,
    getCoinReturn: coinService.getReturnedCoin,
    colaButtonPressed,
    getDispenser
  };
};
