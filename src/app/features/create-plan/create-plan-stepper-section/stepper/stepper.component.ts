import { Component, inject } from '@angular/core';
import { StepItemComponent } from "../step-item/step-item.component";
import { StepContentComponent } from "../step-content/step-content.component";
import { StepperService } from '../../../../services/stepper.service';

@Component({
  selector: 'app-stepper',
  imports: [StepItemComponent, StepContentComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  stepperService = inject(StepperService);

  private _steps = this.stepperService.stepperData();
  
  public get steps() {
    return this._steps;
  }
  public set steps(value) {
    this._steps = value;
  }
}
