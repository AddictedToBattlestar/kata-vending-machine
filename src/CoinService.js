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
      return amountInserted / 100;
    }
    function getReturnedCoin() {
      return returnedCoins;
    }
    function processPurchase(purchaseAmount) {
      amountInserted -= Math.round(purchaseAmount * 100);
      if (amountInserted >= 0) returnAmountInserted();
    }

    function returnAmountInserted() {
      const numberOfQuartersToReturn = Math.floor(amountInserted / 25);
      for (let x = 0; x < numberOfQuartersToReturn; x++) {
        returnedCoins.push('Quarter');
        amountInserted -= 25;
      }
      const numberOfDimesToReturn = Math.floor(amountInserted / 10);
      for (let x = 0; x < numberOfDimesToReturn; x++) {
        returnedCoins.push('Dime');
        amountInserted -= 10;
      }
      if (amountInserted % 10 === 5) {
        returnedCoins.push('Nickel');
        amountInserted -= 5;
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
