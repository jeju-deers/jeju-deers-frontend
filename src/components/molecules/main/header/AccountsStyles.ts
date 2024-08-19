import tw from "twin.macro";
import styled from "styled-components";

export const AccountsBox = styled.div`
  ${tw`
    px-8
    border-l
    border-white
  `}
  :hover > span {
    ${tw`
      text-blue
    `}
  }
`;

export const AccountsWrap = styled.div`
  ${tw`
    flex
    gap-2
  `}
`;
