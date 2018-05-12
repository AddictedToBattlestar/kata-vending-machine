// eslint-disable-next-line no-var
var nenaner = nenaner || {};
nenaner.displayService = {
  create: getAmountInserted => {
    let temporaryMessage = '';

    function getDisplayFormat(amountInCents) {
      return `$${Number(amountInCents / 100).toFixed(2)}`;
    }

    function getDisplay() {
      let messageToDisplay;
      if (temporaryMessage) {
        messageToDisplay = temporaryMessage;
        temporaryMessage = '';
      } else {
        const amountInserted = getAmountInserted();
        messageToDisplay = amountInserted === 0 ? 'INSERT COIN' : getDisplayFormat(amountInserted);
      }
      return messageToDisplay;
    }

    function setTemporaryMessage(desiredTemporaryMessage) {
      temporaryMessage = desiredTemporaryMessage;
    }

    function setTemporaryPriceMessage(priceToDisplay) {
      temporaryMessage = `PRICE ${getDisplayFormat(priceToDisplay)}`;
    }

    return {
      getDisplay,
      setTemporaryMessage,
      setTemporaryPriceMessage
    };
  }
};
