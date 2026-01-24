export interface StepOption {
  stepOptionId: number;
  stepOptionTitle: string;
  stepOptionPrice?: number;
  quantityType?: 'regular' | 'capsule';
  quantities?: { regular: number; capsule: number };
  stepOptionDeliveryQuantity?: number;
  stepOptionDescribe: string;
}

export type SelectedOption = {
  brew: StepOption;
  bean: StepOption;
  bag: StepOption;
  grind: StepOption;
  delivery: StepOption;
};
