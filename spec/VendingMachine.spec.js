describe('Vending machine', () => {
  let subject;
  let mockCoinService;

  when('started', () => {
    beforeEach(() => {
      mockCoinService = jasmine.createSpyObj('coinService', ['insertCoin', 'getAmountInserted']);
      spyOn(nenaner.coinService, 'create').and.returnValue(mockCoinService);
      mockCoinService.getAmountInserted.and.returnValue(0);

      subject = vendingMachine();
    });

    it('displays the message "INSERT COIN"', () => {
      expect(subject.getDisplay()).toEqual('INSERT COIN');
    });

    when('coins are inserted', () => {
      beforeEach(() => {
        mockCoinService.getAmountInserted.and.returnValue(1.5);
      });

      it('displays the amount with a dollar sign and 2 decimal places', () => {
        expect(subject.getDisplay()).toEqual('$1.50');
      });
    });
  });
});
