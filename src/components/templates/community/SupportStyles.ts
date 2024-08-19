import tw from "twin.macro";
import styled from "styled-components";

export const SupportLayout = styled.div`
  ${tw`
    h-full
    w-full
    pt-20
  `}
`;

export const BoardTitleWrap = styled.div`
  ${tw`
    flex
    justify-center
  `}
`;

export const BoardWrap = styled.div`
  ${tw`
    py-16
    px-32
    min-w-262.5
  `}
`;

export const WriteButtonWrap = styled.div`
  ${tw`
    text-end
    mt-4
    min-w-262.5
  `}
`;
