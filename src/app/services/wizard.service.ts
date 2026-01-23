import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  currentStep = signal<string | null>(null);
  lastOpenedStep = signal<string | null>(null);

  setCurrentStep(step: string) {
    this.currentStep.set(step);
  }
}
