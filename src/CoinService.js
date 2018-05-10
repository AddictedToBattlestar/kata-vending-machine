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

    function insertCoin(coinInserted) {
      amountInserted += coinValues[coinInserted];
    }
    function getAmountInserted() {
      return amountInserted;
    }

    return {
      insertCoin,
      getAmountInserted,
      getReturnedCoin: () => {}
    };
  }
};
