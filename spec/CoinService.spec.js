describe('Coin service', () => {
  let subject;

  describe('started', () => {
    beforeEach(() => {
      subject = nenaner.coinService.create();
    });

    it('has a total amount inserted of zero', () => {
      expect(subject.getAmountInserted()).toEqual(0);
    });

    when('a Nickel is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Nickel');
      });

      it('has a total amount inserted of 0.05', () => {
        expect(subject.getAmountInserted()).toEqual(0.05);
      });
    });

    when('a Dime is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Dime');
      });

      it('has a total amount inserted of 0.1', () => {
        expect(subject.getAmountInserted()).toEqual(0.1);
      });
    });

    when('a Quarter is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Quarter');
      });

      it('has a total amount inserted of 0.25', () => {
        expect(subject.getAmountInserted()).toEqual(0.25);
      });
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

      it('has a total amount inserted of 0.9', () => {
        expect(subject.getAmountInserted()).toEqual(0.9);
      });
    });
  });
});
