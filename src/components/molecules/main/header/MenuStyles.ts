import tw from "twin.macro";
import styled from "styled-components";

export const MenuBox = styled.div`
  ${tw`
    relative
    font-bold
    font-['Inter']
    text-white
    px-8
    py-2
    text-xl
  `}

  &:hover {
    ${tw`
    bg-[#69A6FF]
    block
    `}
  }

  &:hover > * {
    ${tw`
      block
    `}
  }
`;
