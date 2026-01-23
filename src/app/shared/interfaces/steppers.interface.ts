import { StepOption } from "./pricing.interface";

export interface Stepper {
  stepNumber: string;
  orderState: keyof OrderState;
  stepLabel: string;
  stepTitle: string;
  stepOptions: StepOption[];
}

export interface OrderState {
  brewMethod: number | null ;
  beanType: number | null;
  bagSize: number | null;
  grindLevel: number | null;
  delivery: number | null;
}
