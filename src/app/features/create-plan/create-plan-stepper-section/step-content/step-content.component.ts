import { Component, inject, input } from '@angular/core';
import {
  OrderState,
  Stepper,
} from '../../../../shared/interfaces/steppers.interface';
import { CoffeePlanService } from '../../../../services/coffee-plan.service';

@Component({
  selector: 'step-content',
  imports: [],
  templateUrl: './step-content.component.html',
  styleUrl: './step-content.component.css',
})
export class StepContentComponent {
  stepForContent = input<Stepper[]>();

  coffeePlanService = inject(CoffeePlanService);

  selectedId(step: keyof OrderState, optionId: number) {
    this.coffeePlanService.set(step, optionId);
  }
  onToggle(step: string, event: Event) {
    const details = event.target as HTMLDetailsElement;
    if (details.open) {
      this.coffeePlanService.lastOpenedStep.set(step);
    }
  }
}
