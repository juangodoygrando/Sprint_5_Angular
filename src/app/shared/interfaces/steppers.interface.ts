export interface Stepper {
  stepNumber: string;
  stepLabel: string;
  stepTitle: string;
  stepOptions: [
    {
      stepOptionId: number;
      stepOptionTitle: string;
      stepOptionDescribe: string;
    },
    {
      stepOptionId: number;
      stepOptionTitle: string;
      stepOptionDescribe: string;
    },
    {
      stepOptionId: number;
      stepOptionTitle: string;
      stepOptionDescribe: string;
    }
  ];
}

export interface OrderState {
  brewMethod: string | null;
  beanType: string | null;
  bagSize: string | null;
  grindLevel: string | null;
  delivery: string | null;
}
