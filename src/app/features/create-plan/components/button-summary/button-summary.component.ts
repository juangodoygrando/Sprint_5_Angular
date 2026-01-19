import { Component, inject } from '@angular/core';
import { CoffeePlanService } from '../../../../services/coffee-plan.service';

@Component({
  selector: 'button-summary',
  imports: [],
  templateUrl: './button-summary.component.html',
  styleUrl: './button-summary.component.css',
})
export class ButtonSummaryComponent {

  coffeePlanService = inject(CoffeePlanService);
  
}
