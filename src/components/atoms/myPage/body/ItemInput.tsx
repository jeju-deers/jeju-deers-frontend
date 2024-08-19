import { ItemInputInput } from "./ItemInputStyles";

interface Props {
  id: string;
  value?: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
}

const ItemInput = ({ id, value, required, minLength, maxLength }: Props) => {
  return (
    <ItemInputInput
      type="text"
      id={id}
      name={id}
      value={value}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
};

export default ItemInput;
