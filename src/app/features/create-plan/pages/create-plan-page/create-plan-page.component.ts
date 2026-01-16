import { Component, signal } from '@angular/core';
import { CreatePlanHeroSectionComponent } from '../../create-plan-hero-section/create-plan-hero-section.component';
import { CreatePlanStepsSectionComponent } from '../../create-plan-steps-section/create-plan-steps-section.component';
import { step } from '../../../../shared/interfaces/create-plan-steps.interface';
import { StepperComponent } from "../../create-plan-stepper-section/stepper/stepper.component";



const steps: step[] = [
  {
    step: '01',
    title: 'Pick your coffee',
    description:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    step: '02',
    title: 'Choose your frequency',
    description:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    step: '03',
    title: 'Receive and enjoy!',
    description:
      'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
];

@Component({
  selector: 'create-plan-page',
  imports: [CreatePlanHeroSectionComponent, CreatePlanStepsSectionComponent, StepperComponent],
  templateUrl: './create-plan-page.component.html',
  styleUrl: './create-plan-page.component.css',
})
export class CreatePlanPageComponent {
  stepArray:step[]=steps
}
