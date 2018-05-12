// eslint-disable-next-line no-var
var nenaner = nenaner || {};
nenaner.coinService = {
  create: () => {
    const coinValues = {
      Nickel: 5,
      Dime: 10,
      Quarter: 25
    };
    let amountInserted = 0;
    let returnedCoin;

    function insertCoin(coinInserted) {
      if (coinValues[coinInserted]) amountInserted += coinValues[coinInserted];
      else returnedCoin = coinInserted;
    }
    function getAmountInserted() {
      return amountInserted / 100;
    }
    function getReturnedCoin() {
      return returnedCoin;
    }
    function processPurchase(purchaseAmount) {
      amountInserted -= purchaseAmount * 100;
      if (amountInserted >= 0) returnedCoin = 'Dime';
    }

    return {
      insertCoin,
      getAmountInserted,
      getReturnedCoin,
      processPurchase
    };
  }
};
