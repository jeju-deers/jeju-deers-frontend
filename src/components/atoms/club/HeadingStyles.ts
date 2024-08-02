import tw from "twin.macro";
import styled from "styled-components";

export const HeadingBox = styled.div`
  ${tw`
    flex
    pb-4
    gap-4
    text-4xl
    border-b
    border-black
  `}
`;

export const HeadingTextSpan = styled.span`
  ${tw`
    font-bold
  `}
`;

export const HeadingLogoImage = styled.img`
  ${tw`
    w-10
  `}
`;
