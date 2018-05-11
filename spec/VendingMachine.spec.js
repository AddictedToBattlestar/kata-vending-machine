describe('Vending machine', () => {
  let subject;
  let mockCoinService;
  let mockDisplayService;

  when('started', () => {
    beforeEach(() => {
      setupMocksForTheCoinService();
      mockCoinService.getAmountInserted.and.returnValue(0);
      mockCoinService.getReturnedCoin.and.returnValue('fake-returned-coin');

      setupMocksForTheDisplayService();
      mockDisplayService.getDisplay.and.returnValue('fake-display-message');

      subject = nenaner.vendingMachine();
    });

    it('has an empty dispenser', () => {
      expect(subject.getDispenser()).not.toBeDefined();
    });

    it('indirectly provides from the coinService coins that have been returned', () => {
      expect(subject.getCoinReturn()).toEqual('fake-returned-coin');
    });

    it('has setup the display to feed from from the displayService', () => {
      expect(subject.getDisplay()).toEqual('fake-display-message');
    });

    describe('select product testing', () => {
      when('the button for Cola is pressed', () => {
        beforeEach(() => {
          subject.colaButtonPressed();
        });

        it('displays the temporary message "PRICE $1.00"', () => {
          expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('PRICE $1.00');
        });
      });

      when('the button for chips is pressed', () => {
        beforeEach(() => {
          subject.chipsButtonPressed();
        });

        it('displays the temporary message "PRICE $0.50"', () => {
          expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('PRICE $0.50');
        });
      });

      when('the button for Cola is pressed and there are enough coins inserted', () => {
        beforeEach(() => {
          mockCoinService.getAmountInserted.and.returnValue(1);
          subject.colaButtonPressed();
        });

        it('displays the temporary message "THANK YOU"', () => {
          expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('THANK YOU');
        });

        it('dispenses a Cola', () => {
          expect(subject.getDispenser()).toEqual('Cola');
        });

        it('has reduced the amount inserted for the cost of the Cola', () => {
          expect(mockCoinService.processPurchase).toHaveBeenCalledWith(1);
        });
      });

      when('the button for Chips is pressed and there are enough coins inserted', () => {
        beforeEach(() => {
          mockCoinService.getAmountInserted.and.returnValue(1);
          subject.chipsButtonPressed();
        });

        it('displays the temporary message "THANK YOU"', () => {
          expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('THANK YOU');
        });

        it('dispenses a Chips', () => {
          expect(subject.getDispenser()).toEqual('Chips');
        });

        it('has reduced the amount inserted for the cost of the Cola', () => {
          expect(mockCoinService.processPurchase).toHaveBeenCalledWith(0.5);
        });
      });

      when('the button for Cola is pressed and there are too many coins inserted', () => {
        beforeEach(() => {
          mockCoinService.getAmountInserted.and.returnValue(1.25);
          subject.colaButtonPressed();
        });

        it('displays the temporary message "THANK YOU"', () => {
          expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('THANK YOU');
        });

        it('dispenses a Cola', () => {
          expect(subject.getDispenser()).toEqual('Cola');
        });

        it('has reduced the amount inserted for the cost of the Cola', () => {
          expect(mockCoinService.processPurchase).toHaveBeenCalledWith(1);
        });
      });
    });
  });

  function setupMocksForTheCoinService() {
    mockCoinService = jasmine.createSpyObj('coinService', [
      'insertCoin',
      'getAmountInserted',
      'getReturnedCoin',
      'processPurchase'
    ]);
    spyOn(nenaner.coinService, 'create').and.returnValue(mockCoinService);
  }

  function setupMocksForTheDisplayService() {
    mockDisplayService = jasmine.createSpyObj('displayService', [
      'getDisplay',
      'setTemporaryMessage'
    ]);
    spyOn(nenaner.displayService, 'create').and.returnValue(mockDisplayService);
  }
});
