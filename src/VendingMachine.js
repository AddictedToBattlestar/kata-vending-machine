// eslint-disable-next-line no-var
var nenaner = nenaner || {};
nenaner.vendingMachine = () => {
  const coinService = nenaner.coinService.create();
  const displayService = nenaner.displayService.create(coinService.getAmountInserted);
  let dispenser;

  function colaButtonPressed() {
    if (coinService.getAmountInserted() >= 1) {
      displayService.setTemporaryMessage('THANK YOU');
      coinService.processPurchase(1);
      dispenser = 'Cola';
    } else {
      displayService.setTemporaryMessage('PRICE $1.00');
    }
  }

  function getDispenser() {
    return dispenser;
  }

  return {
    insertCoin: coinService.insertCoin,
    getDisplay: displayService.getDisplay,
    getCoinReturn: coinService.getReturnedCoin,
    colaButtonPressed,
    getDispenser
  };
};
