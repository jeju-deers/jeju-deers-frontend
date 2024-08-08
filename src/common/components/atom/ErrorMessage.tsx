import { ErrorMessageBox } from "./ErrorMessageStyles";
interface Props {
  text: string;
}

const ErrorMessage = ({ text }: Props) => <ErrorMessageBox>{text}</ErrorMessageBox>;

export default ErrorMessage;
