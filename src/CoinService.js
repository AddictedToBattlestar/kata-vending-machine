// eslint-disable-next-line no-var
var nenaner = nenaner || {};
nenaner.coinService = {
  create: () => {
    const coinValues = {
      Nickel: 0.05,
      Dime: 0.1,
      Quarter: 0.25
    };
    let amountInserted = 0;
    let returnedCoin;

    function insertCoin(coinInserted) {
      if (coinValues[coinInserted]) amountInserted += coinValues[coinInserted];
      else returnedCoin = coinInserted;
    }
    function getAmountInserted() {
      return amountInserted;
    }
    function getReturnedCoin() {
      return returnedCoin;
    }

    return {
      insertCoin,
      getAmountInserted,
      getReturnedCoin
    };
  }
};
