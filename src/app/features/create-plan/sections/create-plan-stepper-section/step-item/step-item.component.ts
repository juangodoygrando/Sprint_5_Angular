import { Component, inject, input } from '@angular/core';
import { Stepper } from '../../../../../shared/interfaces/steppers.interface';
import { WizardService } from '../../../../../services/wizard.service';

@Component({
  selector: 'app-step-item',
  imports: [],
  templateUrl: './step-item.component.html',

})
export class StepItemComponent {
  stepForItem = input<Stepper[]>();

  wizardService = inject(WizardService);

  selectStep(step: string) {
    this.wizardService.setCurrentStep(step);
  }
}
