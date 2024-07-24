import styled from "styled-components";
import tw from "twin.macro";

export const Button = styled.button`
  ${tw`
    border-none
    p-3
  `}

  &:hover {
    ${tw`
      cursor-pointer
      underline
      decoration-1
    `}
  }

  &[disabled] {
    ${tw`
      text-gray-500
      cursor-default
      no-underline
    `}
  }
`;
