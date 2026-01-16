import { Component, input } from '@angular/core';
import { Stepper } from '../../../../shared/interfaces/steppers.interface';


@Component({
  selector: 'step-item',
  imports: [],
  templateUrl: './step-item.component.html',
  styleUrl: './step-item.component.css',
})
export class StepItemComponent {
  stepForItem = input<Stepper[]>();
}
