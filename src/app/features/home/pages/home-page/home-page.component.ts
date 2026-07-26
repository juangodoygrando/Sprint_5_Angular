import { Component } from '@angular/core';
import { HomeHeroSectionComponent } from "../../home-hero-section/home-hero-section.component";
import { HomeOurCollectionSectionComponent } from "../../home-our-collection-section/home-our-collection-section.component";
import { HomeWhyChooseUsSectionComponent } from "../../home-why-choose-us-section/home-why-choose-us-section.component";
import { steps } from '../../../../data/how-it-work.data';
import { step } from '../../../../shared/interfaces/create-plan-steps.interface';
import { StepsSectionComponent } from "../../../../shared/components/steps-section/steps-section.component";
import { ButtonCreatePlanComponent } from "../../../../shared/components/button-create-plan/button-create-plan.component";

@Component({
  selector: 'app-home-page',
  imports: [HomeHeroSectionComponent, HomeOurCollectionSectionComponent, HomeWhyChooseUsSectionComponent, StepsSectionComponent, ButtonCreatePlanComponent],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {
  stepArray: step[] = steps;
}
