import { Component } from '@angular/core';
import { HomeHeroSectionComponent } from "../../home-hero-section/home-hero-section.component";
import { HomeOurCollectionSectionComponent } from "../../home-our-collection-section/home-our-collection-section.component";

@Component({
  selector: 'app-home-page',
  imports: [HomeHeroSectionComponent, HomeOurCollectionSectionComponent],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

}
