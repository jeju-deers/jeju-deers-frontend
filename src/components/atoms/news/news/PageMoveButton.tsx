import { Button } from "./PageMoveButtonStyles";

interface Props {
  onClick: () => void;
  disabled: boolean;
  children: string;
}

const PageMoveButton = ({ onClick, disabled, children }: Props) => (
  <Button onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

export default PageMoveButton;
