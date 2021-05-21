
export interface ButtonInterface  {
  disabled: boolean;
  onClick?: () => void;
  text: string;
  type: 'submit' | 'reset' | 'button';
}