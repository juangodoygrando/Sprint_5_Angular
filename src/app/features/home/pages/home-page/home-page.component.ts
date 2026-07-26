import { Component } from '@angular/core';
import { HomeOurCollectionSectionComponent } from '../../sections/home-our-collection-section/home-our-collection-section.component';
import { HomeWhyChooseUsSectionComponent } from '../../sections/home-why-choose-us-section/home-why-choose-us-section.component';
import { steps } from '../../../../data/how-it-work.data';
import { step } from '../../../../shared/interfaces/create-plan-steps.interface';
import { StepsSectionComponent } from '../../../../shared/components/steps-section/steps-section.component';

import { HeroData } from '../../../../shared/interfaces/hero.interface';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';
import { ButtonCreatePlanComponent } from "../../../../shared/components/button-create-plan/button-create-plan.component";

@Component({
  selector: 'app-home-page',
  imports: [
    HomeOurCollectionSectionComponent,
    HomeWhyChooseUsSectionComponent,
    StepsSectionComponent,
    HeroSectionComponent,
    ButtonCreatePlanComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  stepArray: step[] = steps;

  heroHome: HeroData = {
    title: 'Great coffee made simple.',
    description:
      "Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
    image: '/assets/home/mobile/image-hero-coffeepress.jpg',
    className: 'home',
    button: { label: 'Create your plan', link: '/create-plan' },
  };
}
