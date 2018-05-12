describe('Vending machine integration/acceptance tests', () => {
  let subject;

  beforeEach(() => {
    subject = nenaner.vendingMachine();
  });

  describe('Accept Coins testing', () => {
    when('a valid coin is inserted', () => {
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

    when('there are no coins inserted', () => {
      it('the machine displays "INSERT COIN"', () => {
        expect(subject.getDisplay()).toEqual('INSERT COIN');
      });
    });

    when('an invalid coin is inserted', () => {
      beforeEach(() => {
        expect(subject.insertCoin('Penny'));
      });

      it('the machine continues to display "INSERT COIN"', () => {
        expect(subject.getDisplay()).toEqual('INSERT COIN');
      });

      it('returns the invalid coin in the coin return', () => {
        expect(subject.getCoinReturn()).toEqual('Penny');
      });
    });
  });

  describe('Select Product testing', () => {
    when('the Cola button is selected with five Quarters inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.colaButtonPressed();
      });

      it('dispenses a Cola', () => {
        expect(subject.getDispenser()).toEqual('Cola');
      });

      it('displays the message "THANK YOU"', () => {
        expect(subject.getDisplay()).toEqual('THANK YOU');
      });

      when('rechecking the display', () => {
        beforeEach(() => {
          subject.getDisplay();
        });

        it('the machine displays "$0.25"', () => {
          expect(subject.getDisplay()).toEqual('$0.25');
        });
      });
    });

    when('the Chips button is selected with two Quarters inserted', () => {
      beforeEach(() => {
        subject.insertCoin('Quarter');
        subject.insertCoin('Quarter');
        subject.chipsButtonPressed();
      });

      it('dispenses a Chips', () => {
        expect(subject.getDispenser()).toEqual('Chips');
      });

      it('displays the message "THANK YOU"', () => {
        expect(subject.getDisplay()).toEqual('THANK YOU');
      });

      when('rechecking the display', () => {
        beforeEach(() => {
          subject.getDisplay();
        });

        it('the machine displays "INSERT COIN"', () => {
          expect(subject.getDisplay()).toEqual('INSERT COIN');
        });
      });
    });

    when('the Candy button is selected with no money inserted', () => {
      beforeEach(() => {
        subject.candyButtonPressed();
      });

      it('has an empty dispenser', () => {
        expect(subject.getDispenser()).not.toBeDefined();
      });

      it('displays the message "PRICE $0.65"', () => {
        expect(subject.getDisplay()).toEqual('PRICE $0.65');
      });
    });
  });
});
