import tw from "twin.macro";
import styled from "styled-components";

export const FooterBox = styled.footer`
  ${tw`
    flex
    h-12
    bg-[#0A281E]
    relative
    border-b-[#69A6FF]
    border-b-2
  `}
`;

export const FooterEdgeWrap = styled.div`
  ${tw`
    absolute
    right-0
  `}
`;

export const FooterContentWrap = styled.div`
  ${tw`
    flex
    justify-center
    w-full
  `}
`;
