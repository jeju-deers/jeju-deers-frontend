import { ItemInputInput } from "./ItemInputStyles";

interface Props {
  id: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
}

const ItemInput = ({ id, required, minLength, maxLength }: Props) => {
  return (
    <ItemInputInput
      type="text"
      id={id}
      name={id}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
};

export default ItemInput;
