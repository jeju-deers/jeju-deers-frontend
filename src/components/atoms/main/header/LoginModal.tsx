import { ChangeEvent, FormEvent } from "react";
import {
  Backdrop,
  CloseButton,
  LoginButton,
  LoginInput,
  LoginInputForm,
  LoginModalBox,
  LoginModalLogoImage,
  LoginTitleBox,
  LoginTitleSpan,
  ModalContainer,
} from "./LoginModalStyles";
import MainLogo from "~/assets/images/homepage_logo_top.svg";

interface Props {
  onClickToggleModal: () => void;
  handleEnterUserId: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEnterPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickLogin: (event: FormEvent<HTMLFormElement>) => void;
}

const LoginModal = ({
  onClickToggleModal,
  handleEnterUserId,
  handleEnterPassword,
  handleClickLogin,
}: Props) => {
  return (
    <ModalContainer>
      <LoginModalBox>
        <CloseButton onClick={onClickToggleModal}>×</CloseButton>
        <LoginTitleBox>
          <LoginModalLogoImage src={MainLogo} alt="Main Logo" />
          <LoginTitleSpan>로그인하기</LoginTitleSpan>
        </LoginTitleBox>
        <LoginInputForm id="login" onSubmit={handleClickLogin}>
          <LoginInput type="text" placeholder="ID" onChange={handleEnterUserId} required />
          <LoginInput
            type="password"
            placeholder="PASSWORD"
            onChange={handleEnterPassword}
            required
          />
          <LoginButton form="login" type="submit">
            로그인
          </LoginButton>
        </LoginInputForm>
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
};

export default LoginModal;
