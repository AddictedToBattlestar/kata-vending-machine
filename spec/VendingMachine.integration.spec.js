describe('Vending machine integration tests', () => {
  let subject;

  when('started', () => {
    beforeEach(() => {
      subject = vendingMachine();
    });

    when('a bunch of coins are inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Nickel');
        subject.insertCoin('Nickel');
        subject.insertCoin('Dime');
        subject.insertCoin('Dime');
        subject.insertCoin('Dime');
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
      });

      it('shows "$0.90" on the display', () => {
        expect(subject.getDisplay()).toEqual('$0.90');
      });
    });
  });
});
