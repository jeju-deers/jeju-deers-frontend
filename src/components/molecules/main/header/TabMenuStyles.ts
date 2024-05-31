import tw from "twin.macro";
import styled from "styled-components";

export const TabMenuBox = styled.div`
  ${tw`
    text-base
    w-40
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
