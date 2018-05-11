// eslint-disable-next-line no-var
var nenaner = nenaner || {};
nenaner.vendingMachine = () => {
  const coinService = nenaner.coinService.create();
  const displayService = nenaner.displayService.create(coinService.getAmountInserted);
  let dispenser;
  const productValues = {
    Cola: 1,
    Chips: 0.5
  };

  function colaButtonPressed() {
    productPurchaseRequest('Cola');
  }

  function chipsButtonPressed() {
    productPurchaseRequest('Chips');
  }

  function productPurchaseRequest(productName) {
    if (coinService.getAmountInserted() >= productValues[productName]) {
      displayService.setTemporaryMessage('THANK YOU');
      coinService.processPurchase(1);
      dispenser = productName;
    } else {
      displayService.setTemporaryMessage(productName === 'Cola' ? 'PRICE $1.00' : 'PRICE $0.50');
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
    chipsButtonPressed,
    getDispenser
  };
};
