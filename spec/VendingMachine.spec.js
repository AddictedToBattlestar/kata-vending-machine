describe('Vending machine', () => {
  let subject;

  when('started', () => {
    beforeEach(() => {
      // eslint-disable-next-line no-undef
      subject = vendingMachine();
    });

    it('displays the message "INSERT COIN"', () => {
      expect(subject.getDisplay()).toEqual('INSERT COIN');
    });
  });
});
