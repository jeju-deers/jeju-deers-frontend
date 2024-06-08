import { SubmitButtonButton } from "./SubmitButtonStyles";

interface Props {
  text: string;
  formId: string;
}

const SubmitButton = ({ text, formId }: Props) => {
  return (
    <SubmitButtonButton type="submit" form={formId}>
      {text}
    </SubmitButtonButton>
  );
};

export default SubmitButton;
