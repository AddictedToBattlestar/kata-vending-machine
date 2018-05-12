describe('Coin service', () => {
  let subject;

  when('created', () => {
    beforeEach(() => {
      subject = nenaner.coinService.create();
    });

    it('has a total amount inserted of zero', () => {
      expect(subject.getAmountInserted()).toEqual(0);
    });

    it('has an empty coin return', () => {
      expect(subject.getReturnedCoin()).toEqual([]);
    });

    when('a Nickel is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Nickel');
      });

      it('has a total amount inserted of 5', () => {
        expect(subject.getAmountInserted()).toEqual(5);
      });
    });

    when('a Dime is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Dime');
      });

      it('has a total amount inserted of 10', () => {
        expect(subject.getAmountInserted()).toEqual(10);
      });
    });

    when('a Quarter is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Quarter');
      });

      it('has a total amount inserted of 25', () => {
        expect(subject.getAmountInserted()).toEqual(25);
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

      it('has a total amount inserted of 90', () => {
        expect(subject.getAmountInserted()).toEqual(90);
      });
    });

    when('an invalid coin is inserted', () => {
      beforeEach(() => {
        expect(subject.insertCoin('Penny'));
      });

      it("doesn't change the total amount inserted", () => {
        expect(subject.getAmountInserted()).toEqual(0);
      });

      it('returns the invalid coin in the coin return', () => {
        expect(subject.getReturnedCoin()).toEqual(['Penny']);
      });
    });

    when('a purchase of 25 is made where 35 is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Dime');
        subject.insertCoin('Quarter');
        subject.processPurchase(25);
      });

      it('places a Dime in the coin return', () => {
        expect(subject.getReturnedCoin()).toEqual(['Dime']);
      });

      it('resets the amount inserted back to 0', () => {
        expect(subject.getAmountInserted()).toEqual(0);
      });
    });

    when('a purchase of 30 is made where 35 is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Dime');
        subject.insertCoin('Quarter');
        subject.processPurchase(30);
      });

      it('places a Nickel in the coin return', () => {
        expect(subject.getReturnedCoin()).toEqual(['Nickel']);
      });

      it('resets the amount inserted back to 0', () => {
        expect(subject.getAmountInserted()).toEqual(0);
      });
    });

    when('a purchase of 55 is made where 75 is inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.processPurchase(55);
      });

      it('places two Dimes in the coin return', () => {
        expect(subject.getReturnedCoin()).toEqual(['Dime', 'Dime']);
      });

      it('resets the amount inserted back to 0', () => {
        expect(subject.getAmountInserted()).toEqual(0);
      });
    });

    when('a purchase of 50 is made where an excessive amount of coins are inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.insertCoin('Dime');
        subject.insertCoin('Dime');
        subject.insertCoin('Nickel');
        subject.insertCoin('Dime');
        subject.insertCoin('Nickel');
        subject.processPurchase(50);
      });

      it('places the remaining amount in the coin return', () => {
        expect(subject.getReturnedCoin()).toEqual([
          'Quarter',
          'Quarter',
          'Quarter',
          'Dime',
          'Nickel'
        ]);
      });

      it('resets the amount inserted back to 0', () => {
        expect(subject.getAmountInserted()).toEqual(0);
      });
    });
  });
});
