import { PropsWithChildren } from "react";
import {
  Backdrop,
  CloseButton,
  LoginButton,
  LoginInput,
  LoginInputBox,
  LoginModalBox,
  LoginModalLogoImage,
  LoginTitleBox,
  LoginTitleSpan,
  ModalContainer,
} from "./LoginStyles";
import MainLogo from "~/assets/images/homepage_logo_top.svg";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({ onClickToggleModal }: PropsWithChildren<ModalDefaultType>) {
  return (
    <ModalContainer>
      <LoginModalBox>
        <CloseButton onClick={onClickToggleModal}>×</CloseButton>
        <LoginTitleBox>
          <LoginModalLogoImage src={MainLogo} alt="Main Logo" />
          <LoginTitleSpan>로그인하기</LoginTitleSpan>
        </LoginTitleBox>
        <LoginInputBox>
          <LoginInput type="text" placeholder="ID" />
          <LoginInput type="password" placeholder="PASSWORD" />
          <LoginButton>로그인</LoginButton>
        </LoginInputBox>
      </LoginModalBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
}

export default Modal;

// import { ChangeEvent, FormEvent } from "react";
// import { LoginButton, LoginForm, LoginInput, LoginLayout } from "./LoginStyles";

// interface Props {
//   handleEnterUserId: (event: ChangeEvent<HTMLInputElement>) => void;
//   handleEnterPassword: (event: ChangeEvent<HTMLInputElement>) => void;
//   handleClickLogin: (event: FormEvent<HTMLFormElement>) => void;
// }

// const Login = ({ handleEnterUserId, handleEnterPassword, handleClickLogin }: Props) => {
//   return (
//     <LoginLayout>
//       <LoginForm id="login" onSubmit={handleClickLogin}>
//         <LoginInput placeholder="ID" onChange={handleEnterUserId} required />
//         <LoginInput placeholder="PASSWORD" onChange={handleEnterPassword} required />
//         <LoginButton form="login" type="submit">
//           로그인
//         </LoginButton>
//       </LoginForm>
//     </LoginLayout>
//   );
// };

// export default Login;
