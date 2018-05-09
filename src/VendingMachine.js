// eslint-disable-next-line no-unused-vars
const vendingMachine = () => {
  let display = 'INSERT COIN';
  function insertCoin() {
    display = '$0.05';
  }
  function getDisplay() {
    return display;
  }
  return {
    insertCoin,
    getDisplay
  };
};
