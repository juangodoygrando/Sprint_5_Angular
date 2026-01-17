import { Component, inject, input } from '@angular/core';
import { OrderState, Stepper } from '../../../../shared/interfaces/steppers.interface';
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
    console.log('Seleccionado:', step, optionId);
    this.coffeePlanService.set(step, optionId);
    console.log('Estado actual:', this.coffeePlanService.get());
  }
}
