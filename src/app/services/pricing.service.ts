import { inject, Injectable } from '@angular/core';
import { CoffeePlanService } from './coffee-plan.service';
import { deliveryPrice } from '../data/steppers.data';

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  coffeePlanService = inject(CoffeePlanService);

  calculatePrice() {
    if (!this.coffeePlanService.isOrderComplete()) return;

    const options = this.coffeePlanService.getSelectedOptions();
    if (!options) return;

    if (
      !options.brew.stepOptionPrice ||
      !options.bean.stepOptionPrice ||
      !options.brew.quantityType ||
      !options.bag.quantities ||
      !options.delivery.stepOptionDeliveryQuantity
    )
      return;

    let base = options.brew.stepOptionPrice * options.bean.stepOptionPrice;

    const brewType = options.brew.quantityType;

    const quantityBag = options.bag.quantities[brewType];

    const price = base * quantityBag;

    const shippingQuantity = options.delivery.stepOptionDeliveryQuantity;

    const accumulator = (price + deliveryPrice) * shippingQuantity;

    return accumulator.toFixed(2);
  }
}
