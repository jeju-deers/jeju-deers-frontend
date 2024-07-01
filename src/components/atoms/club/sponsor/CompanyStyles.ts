import tw from "twin.macro";
import styled from "styled-components";

export const SponsorBox = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    border-2
    border-[#C8C8C8]
    rounded-lg
    py-20
    m-8
  `}
`;

export const SponsorLogoImage = styled.img`
  ${tw`
    w-80
    h-80
  `}
`;

export const SponsorNameBox = styled.span`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
  `}
`;

export const SponsorNameKoSpan = styled.span`
  ${tw`
    text-6xl
    font-bold
  `}
`;

export const SponsorNameEnSpan = styled.span`
  ${tw`
    text-5xl
    font-light
  `}
`;
