import { Component, inject, input } from '@angular/core';
import { Stepper } from '../../../../shared/interfaces/steppers.interface';
import { CoffeePlanService } from '../../../../services/coffee-plan.service';


@Component({
  selector: 'step-item',
  imports: [],
  templateUrl: './step-item.component.html',
  styleUrl: './step-item.component.css',
})
export class StepItemComponent {
  stepForItem = input<Stepper[]>();
  coffeePlanService = inject(CoffeePlanService);

  selectStep(step: string) {
    this.coffeePlanService.setCurrentStep(step);
  }


}
