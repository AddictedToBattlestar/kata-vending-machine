describe('Product service', () => {
  let subject;
  let mockCoinService;
  let mockDisplayService;

  when('created', () => {
    beforeEach(() => {
      setupMocksForTheCoinService();
      setupMocksForTheDisplayService();

      subject = nenaner.productService.create(mockCoinService, mockDisplayService);
    });

    it('has an empty dispenser', () => {
      expect(subject.getDispenser()).not.toBeDefined();
    });

    when('the button for Cola is pressed', () => {
      beforeEach(() => {
        subject.productPurchaseRequest('Cola');
      });

      it('displays the temporary message "PRICE $1.00"', () => {
        expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('PRICE $1.00');
      });
    });

    when('the button for chips is pressed', () => {
      beforeEach(() => {
        subject.productPurchaseRequest('Chips');
      });

      it('displays the temporary message "PRICE $0.50"', () => {
        expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('PRICE $0.50');
      });
    });

    when('the button for Cola is pressed and there are enough coins inserted', () => {
      beforeEach(() => {
        mockCoinService.getAmountInserted.and.returnValue(1);
        subject.productPurchaseRequest('Cola');
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
        subject.productPurchaseRequest('Chips');
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
        subject.productPurchaseRequest('Cola');
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
