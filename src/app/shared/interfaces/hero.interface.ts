export interface HeroButton {
  label: string;
  link: string;
}

export interface HeroData {
  title: string;
  description: string;
  image: string;
  className?: string;
  button?: HeroButton;
}
