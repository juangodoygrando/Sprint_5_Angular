import { Component, input } from '@angular/core';
import { step } from '../../../shared/interfaces/create-plan-steps.interface';
import { StepCardComponent } from "../components/step-card/step-card.component";

@Component({
  selector: 'create-plan-steps-section',
  imports: [StepCardComponent],
  templateUrl: './create-plan-steps-section.component.html',
  styleUrl: './create-plan-steps-section.component.css',
})
export class CreatePlanStepsSectionComponent {
  
  step=input<step[]>()
}
