import { Component } from '@angular/core';
import { collection } from '../../../shared/interfaces/ourCollection.interface';
import { ourCollection } from '../../../data/ourCollection.data';

@Component({
  selector: 'app-home-our-collection-section',
  imports: [],
  templateUrl: './home-our-collection-section.component.html',
  styleUrl: './home-our-collection-section.component.css',
})
export class HomeOurCollectionSectionComponent {
  ourCollection: collection[] = ourCollection;
}
