import tw from "twin.macro";
import styled from "styled-components";

export const MenuBox = styled.div`
  ${tw`
    relative
  `}

  &:hover {
    ${tw`
      bg-blue
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

export const Tab = styled.div`
  ${tw`
    font-bold
    font-["Inter"]
    text-white
    px-8
    py-3
    text-xl
  `}
`;

export const TabMenuBox = styled.div`
  ${tw`
    font-["Inter"]
    text-base
    w-40
  `}
  :hover {
    ${tw`
      bg-gray-300
      text-blue
    `}
  }
  > :first-child {
    ${tw`
      border-blue
      border-t-4
    `}
  }
`;

export const TabMenuItemBox = styled.div`
  ${tw`
    font-extrabold
    italic
    text-gray-1000
    bg-white
    border-gray-500
    border-t
    flex
    justify-center
    px-1
    py-2
  `}
`;
