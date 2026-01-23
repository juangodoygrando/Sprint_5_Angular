import { Component, computed, inject, input, signal } from '@angular/core';
import { StepItemComponent } from '../step-item/step-item.component';
import { StepContentComponent } from '../step-content/step-content.component';
import { StepSummaryComponent } from '../step-summary/step-summary.component';

import { CoffeePlanService } from '../../../../services/coffee-plan.service';
import { ButtonCreatePlanComponent } from '../../../../shared/components/button-create-plan/button-create-plan.component';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { PricingService } from '../../../../services/pricing.service';
import { stepperData } from '../../../../data/steppers.data';



@Component({
  selector: 'app-stepper',
  imports: [
    StepItemComponent,
    StepContentComponent,
    StepSummaryComponent,
    ButtonCreatePlanComponent,
    ModalComponent,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {

  coffeePlanService = inject(CoffeePlanService);
  pricingService = inject(PricingService);

  private _steps = stepperData;

  public get steps() {
    return this._steps;
  }
  public set steps(value) {
    this._steps = value;
  }

  disabled = computed(() => !this.coffeePlanService.isOrderComplete());

  showModal = signal<boolean>(false);

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  totalPrice = computed(() => this.pricingService.calculatePrice());
}
