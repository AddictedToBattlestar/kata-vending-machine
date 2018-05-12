describe('Display service', () => {
  let subject;
  let mockGetAmountInserted;

  when('created', () => {
    beforeEach(() => {
      mockGetAmountInserted = jasmine.createSpy('GetAmountInserted');
      mockGetAmountInserted.and.returnValue(0);

      subject = nenaner.displayService.create(mockGetAmountInserted);
    });

    it('displays the message "INSERT COIN"', () => {
      expect(subject.getDisplay()).toEqual('INSERT COIN');
    });

    when('coins are inserted', () => {
      beforeEach(() => {
        mockGetAmountInserted.and.returnValue(1.5);
      });

      it('displays the amount with a dollar sign and 2 decimal places', () => {
        expect(subject.getDisplay()).toEqual('$1.50');
      });
    });

    when('a temporary message is asked to be displayed', () => {
      beforeEach(() => {
        subject.setTemporaryMessage('fake-temporary-message');
      });

      it('displays the temporary message', () => {
        expect(subject.getDisplay()).toEqual('fake-temporary-message');
      });

      and('when checked a second time', () => {
        beforeEach(() => {
          subject.getDisplay();
        });

        it('displays the message "INSERT COIN"', () => {
          expect(subject.getDisplay()).toEqual('INSERT COIN');
        });
      });
    });

    when('a temporary price message is asked to be displayed', () => {
      beforeEach(() => {
        subject.setTemporaryPriceMessage(0.5);
      });

      it('displays the temporary message', () => {
        expect(subject.getDisplay()).toEqual('PRICE $0.50');
      });

      and('when checked a second time', () => {
        beforeEach(() => {
          subject.getDisplay();
        });

        it('displays the message "INSERT COIN"', () => {
          expect(subject.getDisplay()).toEqual('INSERT COIN');
        });
      });
    });
  });
});
