import { Component ,input } from '@angular/core';

@Component({
  selector: 'app-button-create-plan',
  imports: [],
  templateUrl: './button-create-plan.component.html',
  styleUrl: './button-create-plan.component.css',
})
export class ButtonCreatePlanComponent {
  disabled = input<boolean>(false);
  label = input<string>('Create your plan');
}
