import tw from "twin.macro";
import styled from "styled-components";

export const AccountBox = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    p-4
    gap-4
  `}
`;

export const AccountTextSpan = styled.span`
  ${tw`
    font-bold
    font-['Inter']
    text-white
  `}
`;

export const AccountLogoImage = styled.img`
  ${tw`
    w-4
  `}
`;
