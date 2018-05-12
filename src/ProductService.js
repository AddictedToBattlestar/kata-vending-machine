// eslint-disable-next-line no-var
var nenaner = nenaner || {};
nenaner.productService = {
  create: (coinService, displayService) => {
    const productValues = {
      Cola: 1,
      Chips: 0.5,
      Candy: 0.65
    };
    let dispenser;

    function productPurchaseRequest(productName) {
      if (coinService.getAmountInserted() >= productValues[productName]) {
        displayService.setTemporaryMessage('THANK YOU');
        coinService.processPurchase(productValues[productName]);
        dispenser = productName;
      } else {
        displayService.setTemporaryPriceMessage(productValues[productName]);
      }
    }

    function getDispenser() {
      return dispenser;
    }

    return {
      productPurchaseRequest,
      getDispenser
    };
  }
};
