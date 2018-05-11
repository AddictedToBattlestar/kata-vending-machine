// eslint-disable-next-line no-var
var nenaner = nenaner || {};
nenaner.displayService = {
  create: getAmountInserted => {
    let temporaryMessage = '';

    function getDisplayFormatForAmountInserted(amountInserted) {
      return `$${Number(amountInserted).toFixed(2)}`;
    }

    function getDisplay() {
      let messageToDisplay;
      if (temporaryMessage) {
        messageToDisplay = temporaryMessage;
        temporaryMessage = '';
      } else {
        const amountInserted = getAmountInserted();
        messageToDisplay =
          amountInserted === 0 ? 'INSERT COIN' : getDisplayFormatForAmountInserted(amountInserted);
      }
      return messageToDisplay;
    }

    function setTemporaryMessage(desiredTemporaryMessage) {
      temporaryMessage = desiredTemporaryMessage;
    }

    return {
      getDisplay,
      setTemporaryMessage
    };
  }
};
