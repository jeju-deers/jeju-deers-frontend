import tw from "twin.macro";
import styled from "styled-components";

export const TitleBox = styled.div`
  ${tw`
    flex
    flex-col
    gap-3
    font-bold
    italic
    text-6xl
    m-2
  `}

  p:first-child {
    ${tw`
      text-white
    `}
  }

  p:nth-child(2) {
    ${tw`
      text-[#69A6FF]
    `}
  }
`;
