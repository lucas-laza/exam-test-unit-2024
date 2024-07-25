import { submitOrder, Order } from './index';

// simulons la fonction sendEmail pour que le console.log n'apparaisse pas
jest.mock('./lib/email');

describe('submitOrder', () => {
  describe('When an order is NOT already submitted', () => {
    it('submits the order (change isSubmitted to true) (+ calls sendOrderEmail)', () => {
      const order: Order = {
        id: '1ac12ef',
        isSubmitted: false
      };
  
      const result = submitOrder(order);
  
      expect(result.isSubmitted).toBe(true);
    });
  })

  describe('When an order is already submitted', () => {
    it('throws an error', () => {
      const order: Order = {
        id: '1ac12ef',
        isSubmitted: true
      };
  
      expect(() => submitOrder(order)).toThrow('The order has already been submitted');
    }); 
  })
});
