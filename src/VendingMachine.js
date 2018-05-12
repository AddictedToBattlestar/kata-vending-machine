// eslint-disable-next-line no-var
var nenaner = nenaner || {};
nenaner.vendingMachine = () => {
  const coinService = nenaner.coinService.create();
  const displayService = nenaner.displayService.create(coinService.getAmountInserted);
  const productService = nenaner.productService.create(coinService, displayService);

  function colaButtonPressed() {
    productService.productPurchaseRequest('Cola');
  }

  function chipsButtonPressed() {
    productService.productPurchaseRequest('Chips');
  }

  function candyButtonPressed() {
    productService.productPurchaseRequest('Candy');
  }

  return {
    insertCoin: coinService.insertCoin,
    getDisplay: displayService.getDisplay,
    getCoinReturn: coinService.getReturnedCoin,
    colaButtonPressed,
    chipsButtonPressed,
    candyButtonPressed,
    getDispenser: productService.getDispenser
  };
};
