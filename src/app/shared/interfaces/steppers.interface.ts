export interface Stepper {
  [x: string]: any;
  stepNumber: string;
  orderState: keyof OrderState;
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
  brewMethod: number | null;
  beanType: number | null;
  bagSize: number | null;
  grindLevel: number | null;
  delivery: number | null;
}
