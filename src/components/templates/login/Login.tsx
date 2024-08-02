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
