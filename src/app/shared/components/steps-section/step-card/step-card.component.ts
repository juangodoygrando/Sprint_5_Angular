import { Component, input } from '@angular/core';
import { step } from '../../../interfaces/create-plan-steps.interface';

@Component({
  selector: 'app-step-card',
  imports: [],
  templateUrl: './step-card.component.html',
  styleUrl: './step-card.component.css',
  host: {
    '[attr.data-theme]': 'variant()',
  },
})
export class StepCardComponent {
  stepItem = input<step>();

  variant = input<'primary' | 'secondary'>('secondary');
}
