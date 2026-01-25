import { CoffeePlanService } from '../coffee-plan.service';

describe('CoffeePlanService', () => {
  let service: CoffeePlanService;

  beforeEach(() => {
    service = new CoffeePlanService();
  });

  it('All orderState values ​​should start at null', () => {
    const state = service.orderState();

    expect(state.brewMethod).toBeNull();
    expect(state.beanType).toBeNull();
    expect(state.bagSize).toBeNull();
    expect(state.grindLevel).toBeNull();
    expect(state.delivery).toBeNull();
  });

  it('When calling set(brewMethod, 1), only update that field.', () => {
    service.set('brewMethod', 1);

    expect(service.orderState().brewMethod).toBe(1);
  });

  it('Ensure the get method correctly returns the current state', () => {
    service.set('brewMethod', 1);
    service.set('beanType', 5);
    service.set('grindLevel', 4);
    service.set('delivery', 2);

    service.get();

    expect(service.get()).toEqual({
      brewMethod: 1,
      beanType: 5,
      bagSize: null,
      grindLevel: 4,
      delivery: 2,
    });
  });

  it('isOrderComplete() - Returns true when ALL 5 fields have a value', () => {
    service.set('brewMethod', 1);
    service.set('beanType', 5);
    service.set('grindLevel', 4);
    service.set('delivery', 2);
    service.set('bagSize', 3);

    const state = service.isOrderComplete();

    expect(state).toBe(true);
  });

  it('isOrderComplete() - Returns false if any field is missing', () => {
    service.set('brewMethod', 1);
    service.set('bagSize', 3);
    service.set('grindLevel', 4);
    service.set('delivery', 2);

    const state = service.isOrderComplete();

    expect(state).toBe(false);
  });

  it('isOrderComplete() - should return true for Capsule without grindLevel', () => {
    service.set('brewMethod', 1);
    service.set('beanType', 5);
    service.set('delivery', 2);
    service.set('bagSize', 3);

    const state = service.isOrderComplete();

    expect(state).toBe(true);
  });
});
