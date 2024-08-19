import tw from "twin.macro";
import styled from "styled-components";

export const SponsorLayout = styled.div`
  ${tw`
    font-bold
    h-full
    w-full
    px-32
    py-20
  `}
`;

export const SponsorList = styled.div`
  ${tw`
    grid
    grid-cols-2
  `}
`;
