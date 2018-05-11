// eslint-disable-next-line no-unused-vars
const vendingMachine = () => {
  const coinService = nenaner.coinService.create();
  let temporaryMessage = '';
  let dispenser;

  function getDisplayFormatForAmountInserted(amountInserted) {
    return `$${Number(amountInserted).toFixed(2)}`;
  }

  function getDisplay() {
    let messageToDisplay;
    if (temporaryMessage) {
      messageToDisplay = temporaryMessage;
      temporaryMessage = '';
    } else {
      const amountInserted = coinService.getAmountInserted();
      messageToDisplay =
        amountInserted === 0 ? 'INSERT COIN' : getDisplayFormatForAmountInserted(amountInserted);
    }
    return messageToDisplay;
  }

  function colaButtonPressed() {
    if (coinService.getAmountInserted() >= 1) {
      temporaryMessage = 'THANK YOU';
      coinService.processPurchase(1);
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
