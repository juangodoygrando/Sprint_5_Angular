import { Component, input } from '@angular/core';
import { step } from '../../interfaces/create-plan-steps.interface';
import { StepCardComponent } from './step-card/step-card.component';

@Component({
  selector: 'app-steps-section',
  standalone: true,
  imports: [StepCardComponent],
  templateUrl: './steps-section.component.html',
  styleUrl: './steps-section.component.css',
  host: {
    '[attr.data-theme]': 'variant()',
  },
})
export class StepsSectionComponent {
  step = input<step[]>();

  variant = input<'primary' | 'secondary'>('secondary');
}
