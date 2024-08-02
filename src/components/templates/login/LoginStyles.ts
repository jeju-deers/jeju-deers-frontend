import tw from "twin.macro";
import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0px;
`;

export const LoginModalBox = styled.div`
  width: 600px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  padding: 40px 10px;
  position: relative;
  z-index: 10000;
`;
export const LoginTitleBox = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    border-b-4
    border-black
    w-3/4
    gap-6
  `}
`;

export const LoginModalLogoImage = styled.img`
  width: 120px;
`;

export const LoginTitleSpan = styled.p`
  ${tw`
    text-black
    font-bold
    text-3xl
    pb-10
  `}
`;

export const LoginInputBox = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    w-3/4
    gap-3
    mt-8
  `}
`;

export const LoginInput = styled.input`
  ${tw`
    w-full
    p-3
    border
    border-gray-300
    rounded
    text-lg
  `}
`;

export const LoginButton = styled.button`
  ${tw`
    w-full
    p-3
    bg-black
    text-white
    font-bold
    rounded
    text-lg
  `}
`;

export const CloseButton = styled.button`
  ${tw`
    absolute
    top-1
    right-4
    bg-none
    border-none
    text-5xl
  `}
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
