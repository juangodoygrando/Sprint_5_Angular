import { TestBed } from '@angular/core/testing';
import { CoffeePlanService } from '../coffee-plan.service';
import { PricingService } from '../pricing.service';

describe('PricingService', () => {
  let service: PricingService;

  let coffePlanService: CoffeePlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeePlanService, PricingService],
    });

    service = TestBed.inject(PricingService);
    coffePlanService = TestBed.inject(CoffeePlanService);
  });

  it('calculatePrice() - return undefined if the order is not complete', () => {
    coffePlanService.set('brewMethod', 2);

    expect(service.calculatePrice()).toBeUndefined();
  });
  it('calculatePrice() - Calculate correctly with known values', () => {
    coffePlanService.set('brewMethod', 2);
    coffePlanService.set('beanType', 2);
    coffePlanService.set('grindLevel', 4);
    coffePlanService.set('delivery', 2);
    coffePlanService.set('bagSize', 3);

    expect(service.calculatePrice()).toEqual('52.80');

    coffePlanService.set('brewMethod', 2);
    coffePlanService.set('beanType', 1);
    coffePlanService.set('grindLevel', 3);
    coffePlanService.set('delivery', 1);
    coffePlanService.set('bagSize', 1);

    expect(service.calculatePrice()).toEqual('39.16');
  });
  it('calculatePrice() - Correctly calculates the price of capsules using quantities.capsule', () => {
    
    coffePlanService.set('brewMethod', 1);
    coffePlanService.set('beanType', 1);
    coffePlanService.set('grindLevel', 3);
    coffePlanService.set('delivery', 1);
    coffePlanService.set('bagSize', 1);

    expect(service.calculatePrice()).toEqual('61.34');
  });

});
