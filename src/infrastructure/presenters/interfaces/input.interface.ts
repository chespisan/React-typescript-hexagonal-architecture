import { ChangeEvent } from "react";

export interface InputInterface {
  name: string;
  type: string;
  placeholder: string;
  onChangeInput: ({target}: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}