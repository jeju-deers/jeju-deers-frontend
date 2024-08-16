import { PageMoveButtonButton } from "./PageMoveButtonStyles";

interface Props {
  onClick: () => void;
  disabled: boolean;
  buttonName: string;
}

const PageMoveButton = ({ onClick, disabled, buttonName }: Props) => (
  <PageMoveButtonButton onClick={onClick} disabled={disabled}>
    {buttonName}
  </PageMoveButtonButton>
);

export default PageMoveButton;
