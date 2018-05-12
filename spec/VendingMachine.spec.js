describe('Vending machine', () => {
  let subject;
  let mockCoinService;
  let mockDisplayService;
  let mockProductService;

  when('created', () => {
    beforeEach(() => {
      setupMocksForTheCoinService();
      mockCoinService.getAmountInserted.and.returnValue(0);
      mockCoinService.getReturnedCoin.and.returnValue('fake-returned-coin');

      setupMocksForTheDisplayService();
      mockDisplayService.getDisplay.and.returnValue('fake-display-message');

      setupMocksForTheProductService();
      mockProductService.getDispenser.and.returnValue('fake-dispenser-item');

      subject = nenaner.vendingMachine();
    });

    it('indirectly provides from the coinService coins that have been returned', () => {
      expect(subject.getCoinReturn()).toEqual('fake-returned-coin');
    });

    it('has setup the display to feed from from the displayService', () => {
      expect(subject.getDisplay()).toEqual('fake-display-message');
    });

    it('has setup the dispenser to feed from the productService', () => {
      expect(subject.getDispenser()).toEqual('fake-dispenser-item');
    });

    when('a Cola is selected', () => {
      beforeEach(() => {
        subject.colaButtonPressed();
      });

      it('makes a call to the productService for a Cola', () => {
        expect(mockProductService.productPurchaseRequest).toHaveBeenCalledWith('Cola');
      });
    });

    when('a Chips are selected', () => {
      beforeEach(() => {
        subject.chipsButtonPressed();
      });

      it('makes a call to the productService for Chips', () => {
        expect(mockProductService.productPurchaseRequest).toHaveBeenCalledWith('Chips');
      });
    });

    when('a Candy is selected', () => {
      beforeEach(() => {
        subject.candyButtonPressed();
      });

      it('makes a call to the productService for a Cola', () => {
        expect(mockProductService.productPurchaseRequest).toHaveBeenCalledWith('Candy');
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

  function setupMocksForTheProductService() {
    mockProductService = jasmine.createSpyObj('productService', [
      'productPurchaseRequest',
      'getDispenser'
    ]);
    spyOn(nenaner.productService, 'create').and.returnValue(mockProductService);
  }
});
