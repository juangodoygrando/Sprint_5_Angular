import { Stepper } from "../shared/interfaces/steppers.interface";

export const stepperData: Stepper[] = [
  {
    stepNumber: '01',
    orderState: 'brewMethod',
    stepLabel: 'Preferences',
    stepTitle: 'How do you drink your coffee?',
    stepOptions: [
      {
        stepOptionId: 1,
        stepOptionTitle: 'Capsule',
        stepOptionPrice: 0.85,
        stepOptionDescribe:
          'Compatible with Nespresso systems and similar brewers',
      },
      {
        stepOptionId: 2,
        stepOptionTitle: 'Filter',
        stepOptionPrice: 2.2,
        stepOptionDescribe:
          'For pour over or drip methods like Aeropress, Chemex, and V60',
      },
      {
        stepOptionId: 3,
        stepOptionTitle: 'Espresso',
        stepOptionPrice: 1.75,
        stepOptionDescribe:
          'Dense and finely ground beans for an intense, flavorful experience',
      },
    ],
  },
  {
    stepNumber: '02',
    orderState: 'beanType',
    stepLabel: 'Bean Type',
    stepTitle: 'What type of coffee?',
    stepOptions: [
      {
        stepOptionId: 1,
        stepOptionTitle: 'Single Origin',
        stepOptionPrice: 1.18,
        stepOptionDescribe:
          'Distinct, high quality coffee from a specific family-owned farm',
      },
      {
        stepOptionId: 2,
        stepOptionTitle: 'Decaf',
        stepOptionPrice: 1.05,
        stepOptionDescribe:
          'Just like regular coffee, except the caffeine has been removed',
      },
      {
        stepOptionId: 3,
        stepOptionTitle: 'Blended',
        stepOptionPrice: 1.15,
        stepOptionDescribe:
          'Combination of two or three dark roasted beans of organic coffees',
      },
    ],
  },
  {
    stepNumber: '03',
    orderState: 'bagSize',
    stepLabel: 'Quantity',
    stepTitle: 'How much would you like?',
    stepOptions: [
      {
        stepOptionId: 1,
        stepOptionTitle: '250g',
        stepOptionQuantity: 2.5,
        stepOptionCapsuleQuantity: 12,
        stepOptionDescribe:
          'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        stepOptionId: 2,
        stepOptionTitle: '500g',
        stepOptionQuantity: 5,
        stepOptionCapsuleQuantity: 28,
        stepOptionDescribe:
          'Perfect option for a couple. Yields about 24 delectable cups.',
      },
      {
        stepOptionId: 3,
        stepOptionTitle: '1000g',
        stepOptionQuantity: 10,
        stepOptionCapsuleQuantity: 55,
        stepOptionDescribe:
          'Perfect for offices and events. Yields about 50 delightful cups.',
      },
    ],
  },
  {
    stepNumber: '04',
    orderState: 'grindLevel',
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
    orderState: 'delivery',
    stepLabel: 'Deliveries',
    stepTitle: 'How often should we deliver?',
    stepDeliveryPrice: 3.3,
    stepOptions: [
      {
        stepOptionId: 1,
        stepOptionTitle: 'Every week',
        stepOptionQuantity: 4,
        stepOptionDescribe: 'Includes free first-class shipping.',
      },
      {
        stepOptionId: 2,
        stepOptionTitle: 'Every 2 weeks',
        stepOptionQuantity: 2,
        stepOptionDescribe: 'Includes priority shipping.',
      },
      {
        stepOptionId: 3,
        stepOptionTitle: 'Every month',
        stepOptionQuantity: 1,
        stepOptionDescribe: 'Secure and fast shipping.',
      },
    ],
  },
];
