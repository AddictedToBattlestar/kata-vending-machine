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
    const returnedCoins = [];

    function insertCoin(coinInserted) {
      if (coinValues[coinInserted]) amountInserted += coinValues[coinInserted];
      else returnedCoins.push(coinInserted);
    }
    function getAmountInserted() {
      return amountInserted;
    }
    function getReturnedCoin() {
      return returnedCoins;
    }
    function processPurchase(purchaseAmount) {
      amountInserted -= purchaseAmount;
      if (amountInserted >= 0) returnAmountInserted();
    }

    function returnAmountInserted() {
      returnCoins('Quarter');
      returnCoins('Dime');
      returnCoins('Nickel');
    }

    function returnCoins(coinToReturn) {
      const numberOfCoinsToReturn = Math.floor(amountInserted / coinValues[coinToReturn]);
      for (let x = 0; x < numberOfCoinsToReturn; x++) {
        returnedCoins.push(coinToReturn);
        amountInserted -= coinValues[coinToReturn];
      }
    }

    return {
      insertCoin,
      getAmountInserted,
      getReturnedCoin,
      processPurchase
    };
  }
};
