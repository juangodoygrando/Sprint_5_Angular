import { Component } from '@angular/core';
import { CreatePlanHeroSectionComponent } from '../../create-plan-hero-section/create-plan-hero-section.component';
import { step } from '../../../../shared/interfaces/create-plan-steps.interface';
import { StepperComponent } from '../../create-plan-stepper-section/stepper/stepper.component';
import { steps } from '../../../../data/how-it-work.data';
import { StepsSectionComponent } from "../../../../shared/components/steps-section/steps-section.component";



@Component({
  selector: 'app-create-plan-page',
  imports: [
    CreatePlanHeroSectionComponent,
    StepperComponent,
    StepsSectionComponent
],
  templateUrl: './create-plan-page.component.html',
})
export class CreatePlanPageComponent {
  stepArray: step[] = steps;
}
