import { Component, inject, input } from '@angular/core';
import { CoffeePlanService } from '../../../../services/coffee-plan.service';
import { OrderState } from '../../../../shared/interfaces/steppers.interface';

@Component({
  selector: 'step-summary',
  imports: [],
  templateUrl: './step-summary.component.html',
  styleUrl: './step-summary.component.css',
})
export class StepSummaryComponent {
  coffeePlanService = inject(CoffeePlanService);

  orderStateList = this.coffeePlanService.orderState;

  getTitleById(step: keyof OrderState, id: number | null) {
    return this.coffeePlanService.getStateById(step, id);
  }

  orderSummary = input<string>();
}
