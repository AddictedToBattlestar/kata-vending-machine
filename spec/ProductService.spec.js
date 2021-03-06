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
      expect(subject.getDispenser()).toBeNull();
    });

    when('the button for Cola is pressed', () => {
      beforeEach(() => {
        subject.productPurchaseRequest('Cola');
      });

      it('displays the temporary message "PRICE $1.00"', () => {
        expect(mockDisplayService.setTemporaryPriceMessage).toHaveBeenCalledWith(100);
      });
    });

    when('the button for Chips is pressed', () => {
      beforeEach(() => {
        subject.productPurchaseRequest('Chips');
      });

      it('displays the temporary message "PRICE $0.50"', () => {
        expect(mockDisplayService.setTemporaryPriceMessage).toHaveBeenCalledWith(50);
      });
    });

    when('the button for Candy is pressed', () => {
      beforeEach(() => {
        subject.productPurchaseRequest('Candy');
      });

      it('displays the temporary message "PRICE $0.65"', () => {
        expect(mockDisplayService.setTemporaryPriceMessage).toHaveBeenCalledWith(65);
      });
    });

    when('the button for Cola is pressed and there are enough coins inserted', () => {
      beforeEach(() => {
        mockCoinService.getAmountInserted.and.returnValue(100);
        subject.productPurchaseRequest('Cola');
      });

      it('displays the temporary message "THANK YOU"', () => {
        expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('THANK YOU');
      });

      it('dispenses a Cola', () => {
        expect(subject.getDispenser()).toEqual('Cola');
      });

      it('has reduced the amount inserted for the cost of the Cola', () => {
        expect(mockCoinService.processPurchase).toHaveBeenCalledWith(100);
      });
    });

    when('the button for Chips is pressed and there are enough coins inserted', () => {
      beforeEach(() => {
        mockCoinService.getAmountInserted.and.returnValue(100);
        subject.productPurchaseRequest('Chips');
      });

      it('displays the temporary message "THANK YOU"', () => {
        expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('THANK YOU');
      });

      it('dispenses a Chips', () => {
        expect(subject.getDispenser()).toEqual('Chips');
      });

      it('has reduced the amount inserted for the cost of the Cola', () => {
        expect(mockCoinService.processPurchase).toHaveBeenCalledWith(50);
      });
    });

    when('the button for Cola is pressed and there are too many coins inserted', () => {
      beforeEach(() => {
        mockCoinService.getAmountInserted.and.returnValue(125);
        subject.productPurchaseRequest('Cola');
      });

      it('displays the temporary message "THANK YOU"', () => {
        expect(mockDisplayService.setTemporaryMessage).toHaveBeenCalledWith('THANK YOU');
      });

      it('dispenses a Cola', () => {
        expect(subject.getDispenser()).toEqual('Cola');
      });

      it('has reduced the amount inserted for the cost of the Cola', () => {
        expect(mockCoinService.processPurchase).toHaveBeenCalledWith(100);
      });
    });

    when('rechecking the dispenser after already retrieving your Cola', () => {
      beforeEach(() => {
        mockCoinService.getAmountInserted.and.returnValue(125);
        subject.productPurchaseRequest('Cola');
        subject.getDispenser();
      });

      it('has an empty dispenser', () => {
        expect(subject.getDispenser()).toBeNull();
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
      'setTemporaryMessage',
      'setTemporaryPriceMessage'
    ]);
    spyOn(nenaner.displayService, 'create').and.returnValue(mockDisplayService);
  }
});
