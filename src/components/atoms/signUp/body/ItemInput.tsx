import { ChangeEvent } from "react";
import { ItemInputInput } from "./ItemInputStyles";

interface Props {
  id: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ItemInput = ({ id, required, minLength, maxLength, onChange }: Props) => {
  return (
    <ItemInputInput
      type="text"
      id={id}
      name={id}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

export default ItemInput;
