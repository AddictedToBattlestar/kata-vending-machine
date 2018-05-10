describe('Vending machine', () => {
  let subject;

  when('started', () => {
    beforeEach(() => {
      subject = vendingMachine();
    });

    it('displays the message "INSERT COIN"', () => {
      expect(subject.getDisplay()).toEqual('INSERT COIN');
    });
  });
});
