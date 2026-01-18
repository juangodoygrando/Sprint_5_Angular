import { Injectable, signal } from '@angular/core';
import { OrderState } from '../shared/interfaces/steppers.interface';

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

  currentStep = signal<string | null>(null);

  setCurrentStep(step: string) {
    this.currentStep.set(step);
  }

  lastOpenedStep = signal<string | null>(null);
}
