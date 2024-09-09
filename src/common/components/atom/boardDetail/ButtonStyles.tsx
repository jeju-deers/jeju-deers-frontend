import tw from "twin.macro";
import styled from "styled-components";

interface ButtonProps {
  styleType?: string;
}

export const ButtonButton = styled.button<ButtonProps>`
  ${tw`
      flex
      h-14
      text-2xl
      rounded-lg-xl
      items-center
      justify-center
    `}
  ${({ styleType }) =>
    styleType === "movePostButton" &&
    tw`
      w-33
      border
      border-gray-500
    `}
  ${({ styleType }) =>
    styleType === "submitCommentButton" &&
    tw`
      w-25
      bg-blue
      text-white
    `}
  ${({ styleType }) =>
    styleType === "moveListButton" &&
    tw`
      w-28.25
      border
      border-gray-500
    `}
`;
