import tw from "twin.macro";
import styled from "styled-components";

export const AccountsBox = styled.div`
  ${tw`
    flex
    px-8
    border-l
    border-white
  `}
  :hover {
    ${tw`bg-[#69A6FF]`}
  }
`;
