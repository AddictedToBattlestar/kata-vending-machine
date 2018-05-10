describe('Vending machine', () => {
  let subject;

  when('started', () => {
    beforeEach(() => {
      // eslint-disable-next-line no-undef
      subject = vendingMachine();
    });

    it('displays the message "INSERT COIN"', () => {
      expect(subject.getDisplay()).toEqual('INSERT COIN');
    });

    when('a Nickel is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Nickel');
      });

      it('shows "$0.05" on the display', () => {
        expect(subject.getDisplay()).toEqual('$0.05');
      });
    });

    when('a Dime is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Dime');
      });

      it('shows "$0.10" on the display', () => {
        expect(subject.getDisplay()).toEqual('$0.10');
      });
    });

    when('a Quarter is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Quarter');
      });

      it('shows "$0.25" on the display', () => {
        expect(subject.getDisplay()).toEqual('$0.25');
      });
    });
  });
});
