import { ChangeEvent } from "react";
import { ItemInputInput } from "./ItemInputStyles";

interface Props {
  id: string;
  value?: string;
  required: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ItemInput = ({ id, value, required, pattern, minLength, maxLength, onChange }: Props) => {
  return (
    <ItemInputInput
      type="text"
      id={id}
      name={id}
      value={value}
      required={required}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

export default ItemInput;
