import { Injectable, signal } from '@angular/core';
import { Stepper } from '../shared/interfaces/steppers.interface';
import { stepperData } from '../data/steppers.data';



@Injectable({
  providedIn: 'root',
})
export class StepperService {
  
  private stepperDataCopy: Stepper[] = [...stepperData];

  stepperData = signal<Stepper[]>(this.stepperDataCopy);
}
