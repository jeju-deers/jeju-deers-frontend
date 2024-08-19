import { ChangeEvent } from "react";
import { ItemInputInput } from "./ItemInputStyles";

interface Props {
  type?: string;
  id: string;
  required: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ItemInput = ({
  type = "text",
  id,
  required,
  pattern,
  minLength,
  maxLength,
  onChange,
}: Props) => {
  return (
    <ItemInputInput
      type={type}
      id={id}
      name={id}
      required={required}
      pattern={pattern}
      minLength={minLength}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

export default ItemInput;
