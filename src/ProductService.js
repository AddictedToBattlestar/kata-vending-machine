// eslint-disable-next-line no-var
var nenaner = nenaner || {};
nenaner.productService = {
  create: (coinService, displayService) => {
    const productValues = {
      Cola: 100,
      Chips: 50,
      Candy: 65
    };
    let itemToDispense = null;

    function productPurchaseRequest(productName) {
      if (coinService.getAmountInserted() >= productValues[productName]) {
        displayService.setTemporaryMessage('THANK YOU');
        coinService.processPurchase(productValues[productName]);
        itemToDispense = productName;
      } else {
        displayService.setTemporaryPriceMessage(productValues[productName]);
      }
    }

    function getDispenser() {
      const itemInDispenser = itemToDispense;
      itemToDispense = null;
      return itemInDispenser;
    }

    return {
      productPurchaseRequest,
      getDispenser
    };
  }
};
