import tw from "twin.macro";
import styled from "styled-components";

export const TitleBox = styled.div`
  ${tw`
    absolute
    bottom-52
    left-24
    font-bold
    italic
    text-6xl
    overflow-hidden
    whitespace-nowrap
  `}

  p:first-child {
    ${tw`
      text-white
      pb-2
    `}
  }

  p:nth-child(2) {
    ${tw`text-[#69A6FF]`}
  }
`;
