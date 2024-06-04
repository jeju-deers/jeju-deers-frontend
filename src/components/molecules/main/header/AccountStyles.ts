import tw from "twin.macro";
import styled from "styled-components";

export const AccountBox = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    p-4
  `}

  :hover > * {
    ${tw`
      text-[#69a6ff]
    `}
  }
`;

export const AccountWrap = styled.div`
  ${tw`
    flex
    gap-4
  `}
`;
