import { Component, input } from '@angular/core';
import { step } from '../../../../shared/interfaces/create-plan-steps.interface';

@Component({
  selector: 'step-card',
  imports: [],
  templateUrl: './step-card.component.html',
  
})
export class StepCardComponent {


  stepItem = input<step>();
}
