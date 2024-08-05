import { PageMoveButtonButton } from "./PageMoveButtonStyles";

interface Props {
  onClick: () => void;
  disabled: boolean;
  children: string;
}

const PageMoveButton = ({ onClick, disabled, children }: Props) => (
  <PageMoveButtonButton onClick={onClick} disabled={disabled}>
    {children}
  </PageMoveButtonButton>
);

export default PageMoveButton;
