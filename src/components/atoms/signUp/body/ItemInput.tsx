import { ItemInputInput } from "./ItemInputStyles";

interface Props {
  type: string;
  id: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
}

const ItemInput = ({ type, id, required, minLength, maxLength }: Props) => {
  return (
    <ItemInputInput
      type={type}
      id={id}
      name={id}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
};

export default ItemInput;
