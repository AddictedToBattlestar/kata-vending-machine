describe('Vending machine', () => {
  let subject;
  let mockCoinService;

  when('started', () => {
    beforeEach(() => {
      mockCoinService = jasmine.createSpyObj('coinService', [
        'insertCoin',
        'getAmountInserted',
        'getReturnedCoin'
      ]);
      spyOn(nenaner.coinService, 'create').and.returnValue(mockCoinService);
      mockCoinService.getAmountInserted.and.returnValue(0);
      mockCoinService.getReturnedCoin.and.returnValue('fake-returned-coin');

      subject = vendingMachine();
    });

    it('displays the message "INSERT COIN"', () => {
      expect(subject.getDisplay()).toEqual('INSERT COIN');
    });

    it('indirectly provides from the coinService coins that have been returned', () => {
      expect(subject.getCoinReturn()).toEqual('fake-returned-coin');
    });

    when('coins are inserted', () => {
      beforeEach(() => {
        mockCoinService.getAmountInserted.and.returnValue(1.5);
      });

      it('displays the amount with a dollar sign and 2 decimal places', () => {
        expect(subject.getDisplay()).toEqual('$1.50');
      });
    });

    describe('select product testing', () => {
      when('the button for cola is pressed', () => {
        beforeEach(() => {
          subject.colaButtonPressed();
        });

        it('displays the message "PRICE $1.00"', () => {
          expect(subject.getDisplay()).toEqual('PRICE $1.00');
        });
      });

      when('the button for cola is pressed and there are enought coins inserted', () => {
        beforeEach(() => {
          mockCoinService.getAmountInserted.and.returnValue(1);
          subject.colaButtonPressed();
        });

        it('displays the message "THANK YOU"', () => {
          expect(subject.getDisplay()).toEqual('THANK YOU');
        });
      });
    });
  });
});
