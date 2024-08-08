import tw from "twin.macro";
import styled from "styled-components";

export const ModalContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    items-center
    justify-center
    fixed
    left-0
  `}
`;

export const LoginModalBox = styled.div`
  ${tw`
    w-150
    h-137.5
    flex
    flex-col
    items-center
    border-none
    rounded-lg
    bg-white
    py-10
    px-4
    relative
    z-50
  `}
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
  ${tw`
    w-32
  `}
`;

export const LoginTitleSpan = styled.p`
  ${tw`
    text-black
    font-bold
    text-3xl
    pb-10
  `}
`;

export const LoginInputForm = styled.form`
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
  ${tw`
    w-screen
    h-screen
    fixed
    top-0
    left-0
    z-40
    bg-black
    bg-opacity-40
  `}
`;
