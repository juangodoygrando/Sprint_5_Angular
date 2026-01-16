import { Component, input } from '@angular/core';
import { Stepper } from '../../../../shared/interfaces/steppers.interface';

@Component({
  selector: 'step-content',
  imports: [],
  templateUrl: './step-content.component.html',
  styleUrl: './step-content.component.css',
})
export class StepContentComponent {
  stepForContent = input<Stepper[]>();
}
