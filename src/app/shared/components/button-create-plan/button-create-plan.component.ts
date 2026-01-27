import { Component ,inject,input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-create-plan',
  imports: [],
  templateUrl: './button-create-plan.component.html',
})
export class ButtonCreatePlanComponent {
  disabled = input<boolean>(false);
  label = input<string>('Create your plan');

  private router = inject(Router);

  go() {
    if (!this.disabled()) {
      this.router.navigate(['/create-plan']);
    }
  }
}
