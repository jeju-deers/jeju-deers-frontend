import { CancelButtonButton } from "./CancelButtonStyles";

interface Props {
  text: string;
  formId: string;
}

const CancelButton = ({ text, formId }: Props) => {
  return (
    <CancelButtonButton type="submit" form={formId}>
      {text}
    </CancelButtonButton>
  );
};

export default CancelButton;
