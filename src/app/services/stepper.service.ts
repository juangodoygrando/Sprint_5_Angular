import { Injectable, signal } from '@angular/core';
import { Stepper } from '../shared/interfaces/steppers.interface';

const steppersData: Stepper[] = [
    {
      stepNumber: '01',
      stepLabel: 'Preferences',
      stepTitle: 'How do you drink your coffee?',
      stepOptions: [
        {
          stepOptionId: 1,
          stepOptionTitle: 'Capsule',
          stepOptionDescribe:
            'Compatible with Nespresso systems and similar brewers',
        },
        {
          stepOptionId: 2,
          stepOptionTitle: 'Filter',
          stepOptionDescribe:
            'For pour over or drip methods like Aeropress, Chemex, and V60',
        },
        {
          stepOptionId: 3,
          stepOptionTitle: 'Espresso',
          stepOptionDescribe:
            'Dense and finely ground beans for an intense, flavorful experience',
        },
      ],
    },
    {
      stepNumber: '02',
      stepLabel: 'Bean Type',
      stepTitle: 'What type of coffee?',
      stepOptions: [
        {
          stepOptionId: 1,
          stepOptionTitle: 'Single Origin',
          stepOptionDescribe:
            'Distinct, high quality coffee from a specific family-owned farm',
        },
        {
          stepOptionId: 2,
          stepOptionTitle: 'Decaf',
          stepOptionDescribe:
            'Just like regular coffee, except the caffeine has been removed',
        },
        {
          stepOptionId: 3,
          stepOptionTitle: 'Blended',
          stepOptionDescribe:
            'Combination of two or three dark roasted beans of organic coffees',
        },
      ],
    },
    {
      stepNumber: '03',
      stepLabel: 'Quantity',
      stepTitle: 'How much would you like?',
      stepOptions: [
        {
          stepOptionId: 1,
          stepOptionTitle: '250g',
          stepOptionDescribe:
            'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        {
          stepOptionId: 2,
          stepOptionTitle: '500g',
          stepOptionDescribe:
            'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        {
          stepOptionId: 3,
          stepOptionTitle: '1000g',
          stepOptionDescribe:
            'Perfect for offices and events. Yields about 90 delightful cups.',
        },
      ],
    },
    {
      stepNumber: '04',
      stepLabel: 'Grind Option',
      stepTitle: 'Want us to grind them?',
      stepOptions: [
        {
          stepOptionId: 1,
          stepOptionTitle: 'Wholebean',
          stepOptionDescribe:
            'Best choice if you cherish the full sensory experience',
        },
        {
          stepOptionId: 2,
          stepOptionTitle: 'Filter',
          stepOptionDescribe:
            'For drip or pour-over coffee methods such as V60 or Aeropress',
        },
        {
          stepOptionId: 3,
          stepOptionTitle: 'Cafetiére',
          stepOptionDescribe:
            'Coarse ground beans specially suited for french press coffee',
        },
      ],
    },
    {
      stepNumber: '05',
      stepLabel: 'Deliveries',
      stepTitle: 'How often should we deliver?',
      stepOptions: [
        {
          stepOptionId: 1,
          stepOptionTitle: 'Every week',
          stepOptionDescribe:
            '$7.20 per shipment. Includes free first-class shipping.',
        },
        {
          stepOptionId: 2,
          stepOptionTitle: 'Every 2 weeks',
          stepOptionDescribe:
            '$9.60 per shipment. Includes free priority shipping.',
        },
        {
          stepOptionId: 3,
          stepOptionTitle: 'Every month',
          stepOptionDescribe:
            '$12.00 per shipment. Includes free priority shipping.',
        },
      ],
    },
  ];

@Injectable({
  providedIn: 'root',
})
export class StepperService {

  stepperData = signal<Stepper[]>(steppersData);

}

