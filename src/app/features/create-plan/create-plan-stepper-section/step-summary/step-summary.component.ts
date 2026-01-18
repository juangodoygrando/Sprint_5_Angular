import { Component, inject } from '@angular/core';
import { CoffeePlanService } from '../../../../services/coffee-plan.service';

@Component({
  selector: 'step-summary',
  imports: [],
  templateUrl: './step-summary.component.html',
  styleUrl: './step-summary.component.css',
})
export class StepSummaryComponent {
  coffeePlanService = inject(CoffeePlanService);

  orderStateList = this.coffeePlanService.orderState;

  getTitleById(step: any, id: any) {
    return this.coffeePlanService.getTitleById(step, id);
  }
}
