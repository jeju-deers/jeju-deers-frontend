import tw from "twin.macro";
import styled from "styled-components";

export const AboutTeamBox = styled.div`
  ${tw`
    flex
    p-16
    justify-center
    justify-around
    border-2
    border-gray-500
    mt-5
    mb-24
    rounded-lg
    min-w-max
  `}
`;

export const TeamLogoImage = styled.img`
  ${tw`
    min-w-64
  `}
`;

export const TeamNameBox = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
  `}
`;

export const TeamNameKoSpan = styled.span`
  ${tw`
    text-6xl
    font-bold
  `}
`;

export const TeamNameEnSpan = styled.span`
  ${tw`
    text-5xl
    font-light
  `}
`;
