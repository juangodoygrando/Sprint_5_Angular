import { Component, computed, inject } from '@angular/core';
import { StepItemComponent } from '../step-item/step-item.component';
import { StepContentComponent } from '../step-content/step-content.component';
import { StepperService } from '../../../../services/stepper.service';
import { StepSummaryComponent } from '../step-summary/step-summary.component';

import { CoffeePlanService } from '../../../../services/coffee-plan.service';
import { ButtonCreatePlanComponent } from '../../../../shared/components/button-create-plan/button-create-plan.component';

@Component({
  selector: 'app-stepper',
  imports: [
    StepItemComponent,
    StepContentComponent,
    StepSummaryComponent,
    ButtonCreatePlanComponent,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  stepperService = inject(StepperService);
  coffeePlanService = inject(CoffeePlanService);

  private _steps = this.stepperService.stepperData();

  public get steps() {
    return this._steps;
  }
  public set steps(value) {
    this._steps = value;
  }

  disabled = computed(() => !this.coffeePlanService.isOrderComplete());
}
