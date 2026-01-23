import { computed, inject, Injectable, signal } from '@angular/core';
import { OrderState } from '../shared/interfaces/steppers.interface';
import { SelectedOption } from '../shared/interfaces/pricing.interface';
import { stepperData } from '../data/steppers.data';

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


  getStateById(step: keyof OrderState, id: number | null) {
    let stepSelected = stepperData.find(
      (stepList) => stepList.orderState === step,
    );

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

  findOption(step: keyof OrderState, id: number | null) {
    if (id == null) return undefined;

    return stepperData.find((s) => s.orderState === step)
      ?.stepOptions.find((opt) => opt.stepOptionId === id);
  }
  getSelectedOptions(): SelectedOption {
    const state = this.orderState();

    return {
      brew: this.findOption('brewMethod', state.brewMethod)!,
      bean: this.findOption('beanType', state.beanType)!,
      bag: this.findOption('bagSize', state.bagSize)!,
      grind: this.findOption('grindLevel', state.grindLevel)!,
      delivery: this.findOption('delivery', state.delivery)!,
    };
  }


}
