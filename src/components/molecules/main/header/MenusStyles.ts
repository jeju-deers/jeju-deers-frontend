import tw from "twin.macro";
import styled from "styled-components";

export const MenusBox = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    px-2
  `}

  :hover {
    ${tw`bg-[#69A6FF]`}
  }
`;
