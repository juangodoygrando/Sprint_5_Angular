export interface Stepper {
  stepNumber: string;
  orderState: keyof OrderState;
  stepLabel: string;
  stepTitle: string;
  stepDeliveryPrice?:number

  stepOptions: {
    stepOptionId: number;
    stepOptionTitle: string;
    stepOptionPrice?: number;
    stepOptionQuantity?: number;
    stepOptionCapsuleQuantity?: number;
    stepOptionDescribe: string;
  }[];
}

export interface OrderState {
  brewMethod: number | null;
  beanType: number | null;
  bagSize: number | null;
  grindLevel: number | null;
  delivery: number | null;
}
