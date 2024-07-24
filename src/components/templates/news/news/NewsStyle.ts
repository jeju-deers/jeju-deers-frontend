import tw from "twin.macro";
import styled from "styled-components";

export const NewsLayout = styled.div`
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

export const NewsBoardWrap = styled.div`
  ${tw`
    py-16
    px-32
    min-w-[1050px]
  `}
`;

export const WriteButtonWrap = styled.div`
  ${tw`
    text-end
    mt-4
  `}
`;
