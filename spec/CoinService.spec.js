describe('Coin service', () => {
  let subject;

  describe('started', () => {
    beforeEach(() => {
      subject = nenaner.coinService.create();
    });

    it('has a total amount inserted of zero', () => {
      expect(subject.getAmountInserted()).toEqual(0);
    });

    it('has an empty coin return', () => {
      expect(subject.getReturnedCoin()).not.toBeDefined();
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

    when('When an invalid coin is inserted', () => {
      beforeEach(() => {
        expect(subject.insertCoin('Penny'));
      });

      it("doesn't change the total amount inserted", () => {
        expect(subject.getAmountInserted()).toEqual(0);
      });

      it('returns the invalid coin in the coin return', () => {
        expect(subject.getReturnedCoin()).toEqual('Penny');
      });
    });
  });
});
