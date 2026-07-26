import { Component, inject, input } from '@angular/core';
import { CoffeePlanService } from '../../../../../services/coffee-plan.service';
import { getStateById } from '../../../../../data/steppers.data';

@Component({
  selector: 'app-step-summary',
  imports: [],
  templateUrl: './step-summary.component.html',
  styleUrl: './step-summary.component.css',
})
export class StepSummaryComponent {
  coffeePlanService = inject(CoffeePlanService);

  orderStateList = this.coffeePlanService.orderState;

  orderSummary = input<string>();

  getTitleById = getStateById;
}
