import { Component } from '@angular/core';
import { step } from '../../../../shared/interfaces/create-plan-steps.interface';
import { StepperComponent } from '../../sections/create-plan-stepper-section/stepper/stepper.component';
import { steps } from '../../../../data/how-it-work.data';
import { StepsSectionComponent } from '../../../../shared/components/steps-section/steps-section.component';
import { HeroData } from '../../../../shared/interfaces/hero.interface';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';

@Component({
  selector: 'coffeeroaster-create-plan-page',
  imports: [StepperComponent, StepsSectionComponent, HeroSectionComponent],
  templateUrl: './create-plan-page.component.html',
  styleUrl: './create-plan-page.component.css',
})
export class CreatePlanPageComponent {
  stepArray: step[] = steps;

  heroCreatePlan: HeroData = {
    title: 'Create plan',
    description:
      'Coffee the way you wanted it to be.For coffe delivered omorrow,or next week.For whatever brew method you use.For choise, for onvenience, for quality.',
    image: '/assets/plan/mobile/image-hero-blackcup.jpg',
    className: 'createPlan',
  };
}
