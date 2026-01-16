import { Injectable, signal } from '@angular/core';
import { OrderState } from '../shared/interfaces/steppers.interface';

@Injectable({
  providedIn: 'root',
})
export class CoffeePlanService {
  private orderState = signal<OrderState>({
    brewMethod: null,
    beanType: null,
    bagSize: null,
    grindLevel: null,
    delivery: null,
  });

  set(step: keyof  OrderState, value: any) {
    this.orderState.update((s) => ({ ...s, [step]: value }));
  }

  get() {
    return this.orderState();
  }
}
