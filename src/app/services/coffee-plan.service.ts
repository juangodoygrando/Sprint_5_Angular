import { computed, inject, Injectable, signal } from '@angular/core';
import { OrderState } from '../shared/interfaces/steppers.interface';
import { StepperService } from './stepper.service';

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

  stepperData = inject(StepperService);

  getStateById(step: keyof OrderState, id: number | null) {
    let stepSelected = this.stepperData
      .stepperData()
      .find((s) => s.orderState === step);

    let searchState = stepSelected?.stepOptions.find(
      (s) => s.stepOptionId === id
    );

    return searchState?.stepOptionTitle;
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
}
