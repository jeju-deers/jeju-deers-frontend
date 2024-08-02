import tw from "twin.macro";
import styled from "styled-components";

export const FooterBox = styled.footer`
  ${tw`
    flex
    h-12
    bg-green
    relative
    border-b-blue
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
    mx-5
  `}
`;
