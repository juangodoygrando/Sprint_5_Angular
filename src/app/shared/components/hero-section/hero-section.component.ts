import { Component, input } from '@angular/core';
import { HeroData } from '../../interfaces/hero.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'coffeeroaster-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {
  hero = input.required<HeroData>();
}
