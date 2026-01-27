import { Component } from '@angular/core';
import { HomeHeroSectionComponent } from "../../home-hero-section/home-hero-section.component";
import { HomeOurCollectionSectionComponent } from "../../home-our-collection-section/home-our-collection-section.component";
import { HomeWhyChooseUsSectionComponent } from "../../home-why-choose-us-section/home-why-choose-us-section.component";

@Component({
  selector: 'app-home-page',
  imports: [HomeHeroSectionComponent, HomeOurCollectionSectionComponent, HomeWhyChooseUsSectionComponent],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

}
