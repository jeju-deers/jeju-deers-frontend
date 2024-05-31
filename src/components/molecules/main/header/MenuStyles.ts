import tw from "twin.macro";
import styled from "styled-components";

export const MenuBox = styled.div`
  ${tw`
    relative
    font-bold
    font-['Inter']
    text-white
    px-8
    py-3
    text-xl
  `}

  &:hover {
    ${tw`
      bg-[#69A6FF]
    `}
  }

  &:hover > * {
    ${tw`
      block
    `}
  }
`;

export const TabMenuWrap = styled.div`
  ${tw`
    hidden
    absolute
    -translate-x-1/2
    translate-y-8
    top-1
    left-1/2
    pt-6
  `}
`;
