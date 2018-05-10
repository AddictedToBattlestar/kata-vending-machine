describe('Vending machine integration tests', () => {
  let subject;

  when('started', () => {
    beforeEach(() => {
      subject = vendingMachine();
    });

    when('When a valid coins is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Nickel');
        subject.insertCoin('Nickel');
        subject.insertCoin('Dime');
        subject.insertCoin('Dime');
        subject.insertCoin('Dime');
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
      });

      it('the amount of the coin will be added to the current amount and the display will be updated', () => {
        expect(subject.getDisplay()).toEqual('$0.90');
      });
    });
  });
});
