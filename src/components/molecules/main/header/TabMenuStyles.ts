import tw from "twin.macro";
import styled from "styled-components";

export const TabMenuBox = styled.div`
  ${tw`
    hidden
    absolute
    w-40
    -translate-x-1/2
    translate-y-8
    top-1
    left-1/2
    pt-4
    text-base
  `}
  :hover {
    ${tw`
    bg-[#ECECEC]
    text-[#69a6ff]
    `}
  }
  > :first-child {
    ${tw`
    border-[#69A6FF]
    border-t-4
    `}
  }
`;
