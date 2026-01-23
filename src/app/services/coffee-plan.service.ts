import { computed, Injectable, signal } from '@angular/core';
import { OrderState } from '../shared/interfaces/steppers.interface';
import { SelectedOption } from '../shared/interfaces/pricing.interface';
import { findOption } from '../data/steppers.data';

@Injectable({
  providedIn: 'root',
})
export class CoffeePlanService {
  orderState = signal<OrderState>({
    brewMethod: null,
    beanType: null,
    bagSize: null,
    grindLevel: null,
    delivery: null,
  });

  set(step: keyof OrderState, value: number) {
    this.orderState.update((s) => ({ ...s, [step]: value }));
  }

  get() {
    return this.orderState();
  }

  isOrderComplete = computed(() => {
    const state = this.orderState();

    return Object.entries(state).every(([key, value]) => {
      if (state.brewMethod === 1 && key === 'grindLevel') {
        return true;
      }
      return value !== null;
    });
  });

  getSelectedOptions(): SelectedOption {
    const state = this.orderState();

    return {
      brew: findOption('brewMethod', state.brewMethod)!,
      bean: findOption('beanType', state.beanType)!,
      bag: findOption('bagSize', state.bagSize)!,
      grind: findOption('grindLevel', state.grindLevel)!,
      delivery: findOption('delivery', state.delivery)!,
    };
  }
}
