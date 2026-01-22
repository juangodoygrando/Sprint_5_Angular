export interface StepOption {
  stepOptionId: number;
  stepOptionTitle: string;
  stepOptionPrice?: number;
  stepOptionQuantity?: number;
  stepOptionCapsuleQuantity?: number;
  stepOptionDescribe: string;
}



export type SelectedOption = {
  brew: StepOption;
  bean: StepOption;
  bag: StepOption;
  grind: StepOption;
  delivery: StepOption;
};
