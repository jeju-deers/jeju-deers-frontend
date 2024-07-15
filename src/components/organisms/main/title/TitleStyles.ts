import tw from "twin.macro";
import styled from "styled-components";

export const TitleLayout = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    gap-4
    h-full
  `}
`;

export const TitleEnSpan = styled.span`
  ${tw`
    text-white
    text-xl
    font-semibold
  `}
`;

export const TitleKoSpan = styled.span`
  ${tw`
    text-white
    text-4xl
    font-semibold
  `}
`;
