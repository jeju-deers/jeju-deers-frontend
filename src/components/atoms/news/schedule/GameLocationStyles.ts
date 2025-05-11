import tw from "twin.macro";
import styled from "styled-components";

export const GameLocationBox = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

export const GameLocationSpan = styled.span`
  ${tw`
    font-bold
    text-8
    text-gray-1000
  `}
`;

export const GameLocationMarkerImage = styled.img`
  ${tw`
    px-2
  `}
`;
