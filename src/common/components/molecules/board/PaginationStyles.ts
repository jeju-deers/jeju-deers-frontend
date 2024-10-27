import styled from "styled-components";
import tw from "twin.macro";

export const PaginationBox = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    gap-1 
    h-24
    bg-gray-100
  `}
`;

export const PageButton = styled.button`
  ${tw`
    px-3
    py-1
  `}

  &:hover {
    ${tw`
      cursor-pointer
      transform
      -translate-y-1
    `}
  }

  &[aria-current] {
    ${tw`
      text-blue
      bg-white
      border
      cursor-default
      transform-none
    `}
  }
`;
