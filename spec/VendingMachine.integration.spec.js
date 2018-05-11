describe('Vending machine integration/acceptance tests', () => {
  let subject;

  beforeEach(() => {
    subject = vendingMachine();
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
  });
});
