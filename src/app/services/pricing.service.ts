import { inject, Injectable } from '@angular/core';
import { CoffeePlanService } from './coffee-plan.service';
import { stepperData } from '../data/steppers.data';

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
      !options.bag.stepOptionCapsuleQuantity ||
      !options.bag.stepOptionQuantity ||
      !options.delivery.stepOptionQuantity ||
      !stepperData.find((s) => s.stepDeliveryPrice)
        ?.stepDeliveryPrice
    )
      return;

    let price
    let base = options.brew.stepOptionPrice * options.bean.stepOptionPrice;

    if (options.brew.stepOptionTitle === 'Capsule') {
      price = base * options.bag.stepOptionCapsuleQuantity;
    } else {
      price = base * options.bag.stepOptionQuantity;
    }

    const deliveryPrice = stepperData.find((s) => s.stepDeliveryPrice)?.stepDeliveryPrice;

    let accumulator = 0;
    let shippingQuantity = options.delivery.stepOptionQuantity;

    if (deliveryPrice != null) {
      accumulator = (price * shippingQuantity)+(
        deliveryPrice * options.delivery.stepOptionQuantity
      );
    }

    return accumulator.toFixed(2);
  }
}
